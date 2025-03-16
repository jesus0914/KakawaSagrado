import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link";

const  ItemsMenuMobile  =() =>{
    return(
        <Popover>
            <PopoverTrigger><Menu/></PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/molido" className="block">Cacao Molido</Link>
                <Link href="/categories/grano"className="block">Cacao En Granos</Link>
                <Link href="/categories/capsulas"className="block">Cacao En Càpsulas</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;