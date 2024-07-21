import Image from "next/image";
import s from './productDetails.module.scss'
import { IProduct } from "@/types/product.interface";
import { useState } from "react";


interface IProductImagesProps {
    product: IProduct;
    setIsFullscreen: (isFullscreen: boolean) => void;
    setCurrentImageIndex: (index: number) => void;

}

const ProductImages: React.FC<IProductImagesProps> = ({product, setIsFullscreen, setCurrentImageIndex}) => {
    return (
        <div className={s.images}>
            {product?.images.map((image, index) => (
                <button key={index} onClick={() => { setIsFullscreen(true); setCurrentImageIndex(index) }} >
                    <Image src={image} width={500} height={500} alt='картинка' className="w-full h-auto object-cover cursor-zoom-in" />
                </button>
            ))}
        </div>
    )
}

export default ProductImages;
