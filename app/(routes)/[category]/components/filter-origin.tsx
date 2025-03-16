import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FiltersOriginProps={
 setfilterOrigin:(origin:string) => void
}
const  FiltersOrigin  =(props:FiltersOriginProps) =>{
    const{setfilterOrigin}=props
    const{ result , loading}:FilterTypes=useGetProductField()
    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Origin</p>
            {loading && result === null&&(
                <p>Cargando origen...</p>
            )}
            <RadioGroup onValueChange={(value)=> setfilterOrigin(value)}>
                { result !== null && result.schema.attributes.origin.enum.map((origin:string)=>(
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin}/>
                        <label htmlFor={origin}>{origin}</label>
                    </div>
                ))

                }
            </RadioGroup>
        </div>
    );
}

export default FiltersOrigin ;