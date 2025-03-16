"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop =[
    {
        id:1,
        title:"Envio en 24/48 hrs",
        description:"Como  cliente VIP, tus envios en 24/48 horas.obten mas infromacion y unete. ",
        Link:"#"
    },
    {
        id:2,
        title:"Consiguehasta un -25 en compras superiores a 50 COP",
        description:"-20 % al gastar 100 COP o -25 % al gastar 150 COP.Usa el codigo de Verificacion",
        Link:"#"
    },
    {
        id:3,
        title:"Devoluciones y entregas gratuitas",
        description:"Como  cliente, tus envios y devoluciones gratis en un plan ",
        Link:"#"
    },
    {
        id:4,
        title:"Comprar novedades",
        description:"Todas las novedades al 50% de descuento ",
        Link:"#"
    }
]
const CarouselTextBanner =() =>{
    const router= useRouter()
    return(
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay:2500  //ms
                })
            ]}
            >
            <CarouselContent>
                {dataCarouselTop.map(({id,title,Link,description})=>(
                    <CarouselItem key={id} onClick={()=>router.push(Link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>     
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;