"use client"
import { useGetProductBySlog } from "@/api/getProductBySlog"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import SkeletonProduct from "../components/skeleton-product"
import CarouselProduct from "../components/carousel-product"
import InfoProduct from "../components/info-product"
export default function page(){
    const params= useParams()
    const {productSlog}=params
    const{result}:ResponseType=useGetProductBySlog(productSlog)
    
    if(result ===null){
        return <SkeletonProduct/>
    }
    console.log(result)
    return(
        <div className="max-w-6xl  py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                        <CarouselProduct images={result[0].images}/>
                </div>
                <div className="sm:px-12">
                       <InfoProduct product={result[0]}/>
                </div>
            </div>
        </div>
    )
}