'use client'
import Preloader from "@/components/common/preloader/Preloader"
import Image from "next/image"
import { useState } from "react"
import FullscreenImageSlider from "../imageSlider/FullscreenImageSlider"
import s from './productDetails.module.scss'
import { useFetchProductByID } from "@/hooks/useFetchProductByID"


interface IProductDetailsPageProps {
    productId: string,
}

const ProductDetailsPage: React.FC<IProductDetailsPageProps> = ({ productId }) => {

    const [selectedSize, setSelectedSize] = useState<string>('')
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const { product, loading } = useFetchProductByID({ productId })


    const chooseSize = (size: string) => {
        setSelectedSize(size)
    }

    if (loading) {
        return <Preloader />
    }

    return (
        <div className={s.container}>
            <div className={s.images}>
                {product?.images.map((image, index) => (
                    <button onClick={() => { setIsFullscreen(true); setCurrentImageIndex(index) }} >
                        <Image key={index} src={image} width={500} height={500} alt='картинка' className="w-full h-auto object-cover" />
                    </button>
                ))}
            </div>

            <div className={s.info}>
                <div className={s.title}>
                    <h1 className="text-2xl lg:text-3xl mb-4" >{product?.name}</h1>
                    <p className="text-xl lg:text-2xl mb-6">$ {product?.price}</p>
                </div>

                <div className={s.sizes}>
                    {product?.sizes.map((size, index) => (
                        <button onClick={() => chooseSize(size)} key={index} className={`${s.button} ${selectedSize === size ? 'border-orange-500' : 'border-gray-400'}`} >{size}</button>
                    ))}
                </div>

                <h2>Description:</h2>
                <div className={s.description}>
                    <p className="mb-6">{product?.description}</p>
                    <h2 className="mb-2">Details:</h2>
                    {product?.details.map((detail, index) => (
                        <ul>
                            <li key={index}>- {detail}</li>
                        </ul>
                    ))}
                </div>

                <button className={`${s.button} ${selectedSize ? 'bg-orange-600' : 'bg-orange-400'}`} disabled={!selectedSize}>
                    Добавить в корзину
                </button>
            </div>

            <FullscreenImageSlider product={product} isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
        </div>
    )
}

export default ProductDetailsPage
