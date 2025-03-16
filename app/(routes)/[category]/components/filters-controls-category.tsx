import FiltersOrigin from "./filter-origin";
import FiltersTaste from "./filter-taste";

type FiltersControlsCategoryProps ={
    setFilterOrigin:(origin:string) =>void
    setFilerTaste:(taste:string)=>void
}

const  FiltersControlsCategory  =(props:FiltersControlsCategoryProps) =>{
    const{setFilterOrigin,setFilerTaste}=props
    return(
        <div className="sm:w-[350px] sm:mt-5 py-6">
           <FiltersTaste setfilterTaste={setFilerTaste}/>
           <FiltersOrigin setfilterOrigin={setFilterOrigin}/>
            
        </div>
    );
}

export default FiltersControlsCategory;