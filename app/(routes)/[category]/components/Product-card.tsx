import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import IconButton from "@/components/icon-button";
import { useCart } from "@/hooks/use-cart";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
/* eslint-disable @next/next/no-img-element */
type ProductCardProps = {
    product: ProductType;
};
const ProductCard = (props: ProductCardProps) => {
    const { product } = props;
    const router = useRouter()
    const {addItem}=useCart()
    return (
        <Link href={`/product/${product.slog}`} className="relative p-4 transition-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 py-1 z-[1] top-4">
            < ProductTasteOrigin  origin={product.origin} taste={product.taste}/>

            </div>
            <Carousel opts={{ align: "start" }} className="w-full  ">
                <CarouselContent>
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="group relative">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} alt="Image" className="rounded-xl justify-center " />
                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                <IconButton 
                                onClick={() => {
                                    console.log('Redirigiendo al producto:', product.slog);
                                    router.push(`/product/${product.slog}`);
                                }} 
                                icon={<Expand size={20} className="text-gray-600"/>} 
                                />

                                <IconButton 
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log('Agregando al carrito:', product);
                                    addItem(product);
                                }} 
                                icon={<ShoppingCart size={20} className="text-gray-600"/>} 
                                />

                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-lg sm:text-xl font-semibold text-center mt-2">{product.productName}</p>
            <p className="font-bold text-center text-lg sm:text-xl mt-1">{formatPrice(product.price)}</p>
        </Link>
    );
};

export default ProductCard;
