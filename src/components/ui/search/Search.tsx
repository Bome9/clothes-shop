"use client"

import { useSearchStore } from "@/store/useSearchStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Search: React.FC = () => {
    const setSearchIsOpen = useSearchStore(state => state.setSearchIsOpen);
    const searchIsOpen = useSearchStore(state => state.searchIsOpen);

    const searchVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <AnimatePresence>
            {searchIsOpen && (
                <div className="fixed inset-0 z-50">
                    <motion.div
                        className="absolute left-[40%] -translate-x-1/2  bg-white shadow-md py-4 px-6"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={searchVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center justify-center">
                            <Image src="/search.svg" width={22} height={22} alt="search" />
                            <input className="bg-transparent w-1/2 mx-4 outline-none" placeholder="Search here..." />
                            <button className="text-base font-medium" onClick={setSearchIsOpen}>Close</button>
                        </div>
                        <div className="">
                            Prada
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative inset-0 top-16 bg-black bg-opacity-75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.75 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={setSearchIsOpen}
                    />
                </div>
            )}
        </AnimatePresence>
    );
};

export default Search;
