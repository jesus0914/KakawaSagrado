import { CategoryType } from "@/types/category";
import { useEffect, useState } from "react";
export function useGetCategoryProduct(slog: string | string[]) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slog][$eq]=${slog}`;
    const [result, setResult] = useState<CategoryType[] | null>(null); // define result type here
    const [loading, setLoading]=useState(true)
    const[error,setError]=useState("")


    useEffect(()=>{
         (async ()=>{
            try{
                const res= await fetch(url)
                const json =await res.json()
                setResult(json.data)
                setLoading(false)
            }catch(error:any){
                setError(error)
                setLoading(false)
            }
        
        })()
    },[url])
    return{loading,result,error}
}