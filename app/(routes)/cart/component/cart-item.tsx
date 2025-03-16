"use client";
import ProductsImageMineature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
  product: ProductType;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeItem } = useCart();
  
  return (
    <li className="flex py-6 border-b">
      <ProductsImageMineature product={product} />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <ProductTasteOrigin origin={product.origin} taste={product.taste} />
        </div>
        <div>
          <button className={cn("rounded-full flex items-center justify-center bg-white dark:text-black border shadow-md p-1 hover:scale-110 transition")}>
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
