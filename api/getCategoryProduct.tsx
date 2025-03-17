import { CategoryType } from "@/types/category";
import { useEffect, useState } from "react";
export function useGetCategoryProduct(slug?: string | string[]) {
    const [result, setResult] = useState<CategoryType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!slug) { // Si slug es undefined, no hacer la petición
            setLoading(false);
            return;
        }

        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;

        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResult(json.data);
            } catch (error: any) {
                setError(error.message || "Error al obtener los productos");
            } finally {
                setLoading(false);
            }
        })();
    }, [slug]); // Ahora `url` no se recalcula en cada render

    return { loading, result, error };
}
