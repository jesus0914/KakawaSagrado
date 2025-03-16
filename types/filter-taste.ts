export type FilterTasteTypes ={
     result:ResultFilterTasteTypes | null;
     loading:boolean;
     error:string;
}

export type ResultFilterTasteTypes={
    schema:{
        attributes:{
           taste:{
                enum:any}
        }
       
    }
}