"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./component/cart-item";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function Page() {
  const { items, removeAll } = useCart();

  // Asegura que los precios sean números
  const prices = items.map((product) => Number(product.price));
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  // Cargar Stripe una sola vez
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

  const buyStripe = async () => {
    try {
      // Enviar productos al backend para crear la sesión
      const response = await axios.post("/api/orders", { products: items });

      // Verificar la respuesta
      console.log("Respuesta del backend:", response.data);

      if (response.data && response.data.stripeSessionId) {
        const { stripeSessionId } = response.data;
        const stripe = await stripePromise;

        // Redirigir a Stripe Checkout con la sesión ID
        const { error } = await stripe.redirectToCheckout({
          sessionId: stripeSessionId,
        });

        if (error) {
          console.error("Error de Stripe:", error);
          alert(`Error de Stripe: ${error.message}`);
        }
      } else {
        console.error("No se recibió un id de sesión válido de Stripe.");
        alert("Error en la creación de la sesión de pago. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error en el proceso de pago:", error);
      alert(`Error en el proceso de pago: ${error.message}. Por favor, inténtalo nuevamente.`);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid sm:grid-cols-2 sm:gap-5">
        {/* Sección del carrito */}
        <div>
          {items.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <ul>
              {items.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
            </ul>
          )}
        </div>

        {/* Sección del resumen de compra */}
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold dark:text-black">Order Summary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4 dark:text-black">
              <p>Total del Pedido</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={buyStripe} disabled={items.length === 0}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
