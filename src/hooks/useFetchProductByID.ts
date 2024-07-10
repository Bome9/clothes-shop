import { ProductService } from "@/services/product.service"
import { IProduct } from "@/types/product.interface"
import { useEffect, useState } from "react"

export const useFetchProductByID = ({ productId }: { productId: string }) => {
    const [product, setProduct] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await ProductService.getById(productId)
                setProduct(data)
            } catch (err) {
                setError('Data not found')
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [productId])

    return { product, loading }
}
