import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTasteTypes } from "@/types/filter-taste";

type FiltersTasteProps={
 setfilterTaste:(taste:string) => void
}
const  FiltersTaste  =(props:FiltersTasteProps) =>{
    const{setfilterTaste}=props
    const{ result , loading}:FilterTasteTypes=useGetProductField()
    console.log(result)
    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Taste</p>
            {loading && result === null&&(
                <p>Cargando taste...</p>
            )}
            <RadioGroup onValueChange={(value)=> setfilterTaste(value)}>
                { result !== null && result.schema.attributes.taste.enum.map((taste:string)=>(
                    <div key={taste} className="flex items-center space-x-2">
                        <RadioGroupItem value={taste} id={taste}/>
                        <label htmlFor={taste}>{taste}</label>
                    </div>
                ))

                }
            </RadioGroup>
        </div>
    );
}
export default  FiltersTaste;