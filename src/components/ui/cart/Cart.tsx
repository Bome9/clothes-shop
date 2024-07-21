'use client'

import { useCartStore } from "@/store/useCartStore"
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import s from './cart.module.scss'
import CartItem from "./CartItem";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";


const Cart: React.FC = () => {
    const { isOpen, items, closeCart, removeItemFromCart, updateItemQuantity } = useCartStore()

    useLockBodyScroll({ isOpen })

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.75 },
        exit: { opacity: 0 },
    };

    const variants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={s.cart}>
                    <motion.div
                        className={s.overlay}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 0.2 }}
                        variants={overlayVariants}
                        onClick={closeCart}>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 0.2 }}
                        variants={variants}
                        className={s.cartContainer}
                    >
                        <div className={s.header}>
                            <h1>Cart</h1>
                            <button onClick={closeCart}>&#215;</button>
                        </div>

                        <div className={s.cartItems}>
                            {items.length === 0
                                ? (
                                    <div className={s.empty}>
                                        <p>Your cart is empty</p>
                                    </div>
                                )
                                : (items.map(item => (
                                    <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart} updateItemQuantity={updateItemQuantity} />
                                )))}
                        </div>


                        {items.length > 0 && (
                            <div className={s.footer}>
                                <h1 className="text-lg mt-4 ">Total: $ {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h1>
                                <button className={s.checkout}>
                                    <Link href="/checkout">CHEKOUT</Link>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Cart
