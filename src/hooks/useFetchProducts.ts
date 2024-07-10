import { ProductService } from "@/services/product.service";
import { IProduct } from "@/types/product.interface";
import { useEffect, useState } from "react";

export const useFetchProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('default');
    const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getAll();
                setProducts(data);
                setOriginalProducts(data);
            } catch (err) {
                setError('Error fetching products')
            } finally {
                setLoading(false)
            }
        }
        fetchProducts();
    }, []);

    return { products, loading, error, sortOption, originalProducts, setProducts, setSortOption }
}
