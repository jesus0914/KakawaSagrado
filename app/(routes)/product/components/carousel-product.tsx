import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";  // Importamos Image desde next/image

interface CarouselProductProps {
    images: {
        id: number;
        url: string;
    }[];
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props;

    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            {/* Usamos el componente Image de Next.js para optimizar las imágenes */}
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt="Image Product"
                                className="rounded-lg"
                                width={500}   // Asegúrate de ajustar el width y height según tus necesidades
                                height={500}  // Asegúrate de ajustar el width y height según tus necesidades
                                objectFit="cover"  // Añadimos objectFit para mantener la relación de aspecto
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CarouselProduct;
