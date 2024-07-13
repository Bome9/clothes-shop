'use client'

import { useCartStore } from "@/store/useCartStore"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



const Cart: React.FC = () => {
    const { isOpen, items, closeCart, removeItemFromCart, updateItemQuantity } = useCartStore()


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

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
                <div className="fixed inset-0 flex z-50">
                    <motion.div
                        className="absolute inset-0 bg-black"
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
                        className="relative ml-auto w-full md:w-2/3 lg:w-1/3 h-full bg-white overflow-y-auto"
                    >
                        <div className="flex justify-between p-4 border-b">
                            <h1 className="text-2xl">Cart</h1>
                            <button onClick={closeCart} className="text-2xl">&#215;</button>
                        </div>

                        <div className="flex flex-col justify-start p-4">
                            {items.length === 0
                                ? (
                                    <div className="flex justify-center items-center h-full w-full">
                                        <p className="text-2xl">Your cart is empty</p>
                                    </div>
                                )
                                : (items.map(item => (
                                    <div key={item.id} className="flex justify-between mb-4">
                                        <div className="flex justify-center items-center space-x-4">
                                            <Image src={item.image} alt={item.name} priority width={150} height={150} />
                                            <div className="flex flex-col">
                                                <h1 className=" text-xl md:text-xl lg:text-2xl mb-4">{item.name}</h1>
                                                <span className="text-gray-600">Размер: {item.size}</span>
                                                <span className="text-gray-600">Цвет: {item.color}</span>
                                                <h1 className="text-xl mt-3">Цена: $ {item.price}</h1>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center text-sm text-gray-600 p-2">
                                            <button className="mb-2" onClick={() => removeItemFromCart(item.id, item.size)}>Удалить</button>
                                            <div className="flex justify-center items-center h-3 space-x-3">
                                                <button onClick={() => item.quantity === 1 ? removeItemFromCart(item.id, item.size) : updateItemQuantity(item.id, item.size, item.quantity - 1)}>&minus;</button>
                                                <h1 className="text-sm">{item.quantity}</h1>
                                                <button onClick={() => updateItemQuantity(item.id, item.size, item.quantity + 1)}>&#43;</button>
                                            </div>
                                        </div>
                                    </div>
                                )))}
                        </div>

                        {items.length > 0 && (
                            <div className="flex justify-center">
                                <button className="text-white p-2 font-medium rounded-sm mt-4 w-[50%] bg-black">
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
