'use client'
import Preloader from "@/components/common/preloader/Preloader"
import { useState } from "react"
import FullscreenImageSlider from "../imageSlider/FullscreenImageSlider"
import s from './productDetails.module.scss'
import { useFetchProductByID } from "@/hooks/useFetchProductByID"
import ProductImages from "./ProductImages"
import ProductInfo from "./ProductInfo"


interface IProductDetailsPageProps {
    productId: string,
}

const ProductDetailsPage: React.FC<IProductDetailsPageProps> = ({ productId }) => {

    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
    const { product, loading } = useFetchProductByID({ productId })
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    if (loading) {
        return <Preloader />
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={s.container}>
            <ProductImages
                product={product}
                setIsFullscreen={setIsFullscreen}
                setCurrentImageIndex={setCurrentImageIndex}
            />

            <ProductInfo product={product} />

            <FullscreenImageSlider
                product={product}
                isFullscreen={isFullscreen}
                setIsFullscreen={setIsFullscreen}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
            />
        </div>
    )
}

export default ProductDetailsPage
