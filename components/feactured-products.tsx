"use client";

import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSechema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { useGerFeaturedProducts } from "@/api/useGetFeacturedProducts";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import { useCart } from "@/hooks/use-cart";
const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGerFeaturedProducts(); // Se asume que `result` es un array de productos
  const router =useRouter()
  const {addItem}=useCart()
 // console.log(items); // Depuración para verificar los datos de los productos

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {/* Mostrar Skeleton durante la carga */}
          {loading && <SkeletonSechema grid={3} />}

          {/* Verificar si result no es nulo y tiene productos */}
          {result !== null && result.length > 0 ? (
            result.map((product: ProductType) => {
              const { id, productName, price, images, description,slog,taste,origin } = product;

            //   // Verificamos la estructura de los datos de imagen
            //   console.log("Producto:", product);
            //   console.log("Estructura de imágenes:", images);
            //   console.log("Data de imágenes:", images?.[0]);  // Acceder directamente al primer objeto de imágenes

            //   // Acceder a la URL de la imagen directamente
               const imageUrl = images?.[0]?.url;  // Directamente acceder al campo `url`

            //   console.log("URL de la imagen:", imageUrl);  // Log de la URL

              return (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none relative"> {/* Altura fija mínima y posición relativa */}
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        {/* Si hay una URL de imagen válida, la mostramos */}
                        {imageUrl ? (
                          <img 
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`} 
                            alt={`Imagen de ${productName}`} 
                            className="object-cover w-full h-full" // Asegura que la imagen cubra el contenedor
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-gray-200 text-center text-gray-400"> {/* Fondo gris cuando no hay imagen */}
                            No hay imagen disponible
                          </div>
                        )}
                        {/* Contenedor para los iconos de Expand */}
                        <div className="absolute bottom-5 w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 flex justify-center gap-x-6">
                           <IconButton
                            onClick={()=>router.push(`product/${slog}`)}
                            icon={ <Expand size={20}/>}
                            className="text-gray-600"/>
                           <IconButton
                            onClick={()=>addItem(product)}
                            icon={ <ShoppingCart size={20}/>}
                            className="text-gray-600"/>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{taste}</p>
                            <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">{origin}</p>
                      </div>
                      </div>
                     

                    </Card>
                  </div>
                </CarouselItem>
              );
            })
          ) :null}  {/* Aquí ya no hay mensaje */}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext className="hidden sm:flex"/>

        

      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
