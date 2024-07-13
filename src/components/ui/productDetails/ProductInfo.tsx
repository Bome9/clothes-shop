import { useState } from "react"
import s from './productDetails.module.scss'
import { IProduct } from "@/types/product.interface";
import { useCartStore } from "@/store/useCartStore";

interface IProductInfoProps {
    product: IProduct
}

const ProductInfo: React.FC<IProductInfoProps> = ({product}) => {

    const [selectedSize, setSelectedSize] = useState<string>('')
    const openCart = useCartStore(state => state.openCart)
    const addItemToCart = useCartStore(state => state.addItemToCart)
    const updateItemQuantity = useCartStore(state => state.updateItemQuantity)
    const items = useCartStore(state => state.items)

    const chooseSize = (size: string) => {
        setSelectedSize(size)
    }

    const handleAddToCart = () => {

        const existingItem = items.find(item => item.id === product.id && item.size === selectedSize)

        existingItem
        ? updateItemQuantity(existingItem.id, existingItem.size, existingItem.quantity + 1)
        : addItemToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            color: product.color,
            size: selectedSize,
            image: product.images[0],
            quantity: 1
        })

        openCart()
    }

    return (
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
                        <ul key={index}>
                            <li>- {detail}</li>
                        </ul>
                    ))}
                </div>

                <button onClick={handleAddToCart} className={`${s.button} ${selectedSize ? 'bg-orange-600 transition hover:bg-red-700 duration-300 ease-out' : 'bg-orange-400'}`} disabled={!selectedSize} title={!selectedSize ? "Choose your size" : ""}>
                    Add to cart
                </button>
            </div>
    )
}

export default ProductInfo;
