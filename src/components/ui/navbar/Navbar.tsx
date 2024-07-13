"use client"

import Link from "next/link";
import { menu } from "./menu.data";
import NavItem from "./NavItem";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { useNavMenuStore } from "@/store/useNavMenuStore";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
    const openCart = useCartStore(state => state.openCart);
    const setIsMenuOpen = useNavMenuStore(state => state.setIsMenuOpen);
    const isMenuOpen = useNavMenuStore(state => state.isMenuOpen);

    const variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    }

    return (
        <header className="border-b fixed w-full shadow-md bg-white z-50">
            <div className="flex items-center justify-between mx-auto max-w-2xl py-5 px-4 sm:px-6 lg:max-w-7xl ">
                <Link href="/">
                    <Image src='/carhartt-logo.png' alt='logo' width={180} height={180} />
                </Link>
                <div className="md-hidden">
                    <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                        {menu.map(item => (
                            <NavItem key={item.link} item={item} />
                        ))}
                        <button className="text-base font-medium" onClick={openCart}>
                            Cart
                        </button>
                    </nav>
                </div>
                <div className="lg:hidden relative">
                    <button onClick={setIsMenuOpen} className="text-base font-medium">
                        Menu
                    </button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="lg:hidden absolute border rounded-md right-0 mt-2 w-36 p-4 bg-white shadow-lg"
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                variants={variants}
                            >
                                <div className="">
                                    {menu.map(item =>
                                        <NavItem key={item.link} item={item} />
                                    )}
                                    <button className="text-base font-medium transition duration-300 hover:text-orange-600 ease-in-out" onClick={openCart}>
                                        Cart
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
