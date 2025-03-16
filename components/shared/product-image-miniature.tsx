import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";

interface ProductsImageMineatureProps{
    product:ProductType
}
const ProductsImageMineature   =(props:ProductsImageMineatureProps) =>{
    const{product}=props
    const router = useRouter()
    const imageUrl = product.images?.length > 0 ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}` : null;

    return(
        <div onClick={()=>router.push(`/product/${product.slog}`)}>
        <img 
            src={imageUrl} 
            alt={product.productName || "Imagen del producto"} 
            className="w-24 h-24  overflow-hidden rounded-md sm:w-auto sm:h-32 "
        />
        </div>
    );
}

export default ProductsImageMineature  ;