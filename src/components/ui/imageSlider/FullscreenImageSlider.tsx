import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import s from './imageSlider.module.scss'

interface IFullscreenImageSliderProps {
    product: IProduct | null;
    isFullscreen: boolean;
    setIsFullscreen: (isFullscreen: boolean) => void;
    currentImageIndex: number;
    setCurrentImageIndex: (index: number | ((currentIndex: number) => number)) => void;
}


const FullscreenImageSlider: React.FC<IFullscreenImageSliderProps> = ({ product, isFullscreen, setIsFullscreen, currentImageIndex, setCurrentImageIndex }) => {


    const prevImage = () => {
        if (product) {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex - 1 + product?.images.length) % product?.images.length)
        }
    }

    const nextImage = () => {
        if (product) {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % product?.images.length)
        }
    }

    return (
        <div>
            {isFullscreen && product && (
                <div className={s.fullscreen} onClick={() => setIsFullscreen(false)}>
                    <button onClick={(e) => { e.stopPropagation(); setIsFullscreen(false) }} className="right-4 top-4">&#215;</button>
                    <button className="left-4" onClick={(e) => { e.stopPropagation(); prevImage() }}>&lt;</button>
                    <Image width={900} height={900} className="max-h-full max-w-full rounded-md" src={product?.images[currentImageIndex]} priority alt="image" />
                    <button className="right-4" onClick={(e) => { e.stopPropagation(); nextImage() }}>&gt;</button>
                </div>
            )}
        </div>
    )
}

export default FullscreenImageSlider;
