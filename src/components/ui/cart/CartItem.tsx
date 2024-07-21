import Image from 'next/image'
import s from './cart.module.scss'
import { IProduct } from '@/types/product.interface'
import { ICartItem } from '@/store/useCartStore';


interface ICartItemProps {
    item: ICartItem;
    removeItemFromCart: (id: string, size: string) => void;
    updateItemQuantity: (id: string, size: string, quantity: number) => void;
}


const CartItem: React.FC<ICartItemProps> = ({ item, removeItemFromCart, updateItemQuantity }) => {
    return (
        <div key={item.id} className={s.product}>
            <div className={s.productInfo}>
                <Image src={item.image} alt={item.name} priority width={150} height={150} />
                <div className={s.info}>
                    <h1 className="text-xl md:text-xl lg:text-2xl mb-4">{item.name}</h1>
                    <span className="text-gray-600">Размер: {item.size}</span>
                    <span className="text-gray-600">Цвет: {item.color}</span>
                    <h1 className="text-xl mt-3">Цена: $ {item.price}</h1>
                </div>
            </div>
            <div className={s.buttons}>
                <button className="mb-2" onClick={() => removeItemFromCart(item.id, item.size)}>Удалить</button>
                <div className={s.counter}>
                    <button onClick={() => item.quantity === 1 ? removeItemFromCart(item.id, item.size) : updateItemQuantity(item.id, item.size, item.quantity - 1)}>&minus;</button>
                    <h1 className="text-sm">{item.quantity}</h1>
                    <button onClick={() => updateItemQuantity(item.id, item.size, item.quantity + 1)}>&#43;</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
