"use client";

import { useFetchProducts } from "@/hooks/useFetchProducts";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useSearchStore } from "@/store/useSearchStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Search: React.FC = () => {
    const setSearchIsOpen = useSearchStore(state => state.setSearchIsOpen);
    const searchIsOpen = useSearchStore(state => state.searchIsOpen);
    const setSearchValue = useSearchStore(state => state.setSearchValue);
    const searchValue = useSearchStore(state => state.searchValue);

    const { products } = useFetchProducts();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    useLockBodyScroll(searchIsOpen)

    const searchVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <AnimatePresence>
            {searchIsOpen && (
                <div className="fixed inset-0 z-50 flex place-items-start justify-center">
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.75 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={setSearchIsOpen}
                    />
                    <motion.div
                        className="relative w-full bg-white shadow-md py-5 px-6 z-10"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={searchVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between w-full">
                            <Image src="/search.svg" width={22} height={22} alt="search" />
                            <form className="w-full">
                                <input
                                    className="bg-transparent w-full mx-4 outline-none"
                                    placeholder="Search here..."
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    value={searchValue}
                                />
                            </form>
                            <button className="text-base font-medium" onClick={setSearchIsOpen}>Close</button>
                        </div>
                        {searchValue && (
                            <div>
                                <h1 className="mt-6 text-xl font-medium">Search results:</h1>

                                <div className="mt-4 flex overflow-auto max-h-screen">
                                    <div>Ghbssssssssssssfsfasdfasjdfjaksdnfjs</div>
                                    <div className="flex flex-col items-center justify-center mb-4 lg:flex-row">
                                        {filteredProducts.length > 0
                                            ? (
                                                filteredProducts.slice(0, 3).map(product => (
                                                    <div key={product.id} className="p-4 transition ease-out hover:rounded-lg hover:shadow-xl duration-300">
                                                        <Link key={product.id} onClick={setSearchIsOpen} href={`/products/${product.slug}/${product.id}`}>
                                                            <Image
                                                                className="h-[362px] w-[320px] object-cover object-center rounded-lg"
                                                                src={product.images[0]}
                                                                alt={product.name}
                                                                width={500}
                                                                height={500} />
                                                            <h2>{product.name}</h2>
                                                            <h2>$ {product.price}</h2>
                                                        </Link>
                                                    </div>
                                                ))
                                            )
                                            : (<p>No products found</p>)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Search;