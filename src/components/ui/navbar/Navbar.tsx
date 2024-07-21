"use client"

import Link from "next/link";
import { menu } from "./menu.data";
import NavItem from "./NavItem";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { useNavMenuStore } from "@/store/useNavMenuStore";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchStore } from "@/store/useSearchStore";

const Navbar: React.FC = () => {
    const openCart = useCartStore(state => state.openCart);
    const setIsMenuOpen = useNavMenuStore(state => state.setIsMenuOpen);
    const isMenuOpen = useNavMenuStore(state => state.isMenuOpen);
    const setSearchIsOpen = useSearchStore(state => state.setSearchIsOpen)
    const searchIsOpen = useSearchStore(state => state.searchIsOpen)

    const variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    }

    return (
        <header className="border-b fixed w-full shadow-md bg-white z-50">
            <div className="flex items-center py-5 px-4 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto">
                <Link href="/">
                    <Image src='/carhartt-logo.png' alt='logo' width={120} height={120} />
                </Link>
                <nav className="hidden lg:flex gap-12 ml-8">
                    {menu.map(item => (
                        <NavItem key={item.link} item={item} />
                    ))}
                </nav>
                <div className="ml-auto">
                    <button className="text-base font-medium" onClick={setSearchIsOpen}>
                        Search
                    </button>
                    <button className="ml-6 text-base font-medium" onClick={openCart}>
                        Cart
                    </button>
                </div>

                <div className="lg:hidden relative ml-8">
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
                                {menu.map(item =>
                                    <NavItem key={item.link} item={item} />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
