import Link from "next/link";
import { buttonVariants } from "./ui/button";

const  BannerProduct  =() =>{
    return(
       <>
        <div className="mt-4 text-center">
            <p>Sumergete en una Experiencia unica</p>
            <h4 className="mt-2 text-5xl front-extrabold upperce"> CacaoExquisito</h4>
            <p className="my-2 text-lg">Despierta tus sentido con cada sorbo o bocado</p>
        <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>

        <div className=" h-[350px] bg-cover lg:h-[600px] bg-[url('/img1.jpg')] bg-cover bg-center bg-no-repeat mt-5">
       
        </div>

       </>
    );
}

export default BannerProduct;