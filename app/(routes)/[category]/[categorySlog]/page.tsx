"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "../components/filters-controls-category";
import SkeletonSechema from "@/components/skeletonSchema";
import ProductCard from "../components/Product-card";
import { useState } from "react";

// Cambié 'page' a 'Page'
export default function Page() {
    const params = useParams();
    const { categorySlog } = params;
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlog);
    const router = useRouter();

    const [filterOrigin, setFilterOrigin] = useState("");
    const [filterTaste, setFilterTaste] = useState("");

    // Filtrado combinado: primero filtra por origen, luego por gusto
    const filteredProducts =
        result !== null && !loading &&
        result.filter((product: ProductType) => {
            const matchesOrigin = filterOrigin === '' || product.origin === filterOrigin;
            const matchesTaste = filterTaste === '' || product.taste === filterTaste;
            return matchesOrigin && matchesTaste;
        });

    return (
        <div className='max-w-6xl p-2 py-4 mx-auto sm:py-16 sm:px-24'>
            {result !== null && !loading && (
                <h1 className='text-3xl font-medium'>Cacao {result[0].category.categoryName}</h1>
            )}
            <Separator />
            <div className='sm:flex sm:justify-between p-3'></div>

            <div className='sm:flex sm:justify-between p-3'>
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilerTaste={setFilterTaste} />

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (<SkeletonSechema grid={3} />)}
                    {filteredProducts !== null && !loading && filteredProducts.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>No hay productos con este filtro.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
