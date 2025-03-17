import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import Image from "next/image";  // Importamos Image desde next/image

interface ProductsImageMineatureProps {
    product: ProductType;
}

const ProductsImageMineature = (props: ProductsImageMineatureProps) => {
    const { product } = props;
    const router = useRouter();
    const imageUrl = product.images?.length > 0 ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}` : null;

    return (
        <div onClick={() => router.push(`/product/${product.slog}`)}>
            {/* Reemplazamos <img> por <Image /> */}
            <Image 
                src={imageUrl || "/placeholder.jpg"}  // Usamos un placeholder si no hay imagen
                alt={product.productName || "Imagen del producto"} 
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                width={96}  // Ajusta el ancho según lo que necesites
                height={96} // Ajusta la altura según lo que necesites
                objectFit="cover"  // Asegura que la imagen mantenga la proporción y se ajuste al contenedor
            />
        </div>
    );
}

export default ProductsImageMineature;
