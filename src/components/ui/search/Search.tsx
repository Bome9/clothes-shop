"use client";

import { useFetchProducts } from "@/hooks/useFetchProducts";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useSearchStore } from "@/store/useSearchStore";
import { motion, AnimatePresence } from "framer-motion";
import s from './search.module.scss'
import SearchOverlay from "./SearchOverlay";
import SearchHeader from "./SerachHeader";
import SearchResults from "./SearchResults";

const Search: React.FC = () => {

    const { searchIsOpen, setSearchIsOpen, searchValue, setSearchValue } = useSearchStore();
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
                <div className={s.search}>
                    <SearchOverlay setSearchIsOpen={setSearchIsOpen} />
                    <motion.div
                        className={s.searchContainer}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={searchVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <SearchHeader setSearchIsOpen={setSearchIsOpen} searchValue={searchValue} setSearchValue={setSearchValue}/>
                        {searchValue && (
                            <SearchResults filteredProducts={filteredProducts} setSearchIsOpen={setSearchIsOpen} />
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Search;