import { IProduct } from "@/types/product.interface";
import {motion, AnimatePresence} from "framer-motion";

interface ISortMenuProps {
    sortOption: string;
    setSortOption: (option: string) => void;
    originalProducts: IProduct[];
    setProducts: (products: IProduct[]) => void
}


const SortMenu: React.FC<ISortMenuProps> = ({ sortOption, setSortOption, originalProducts, setProducts }) => {

    const handleSortChange = (option: string) => {
        setSortOption(option);
        let sortedProducts = [...originalProducts];
        if (option == "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option == 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price)
        }

        setProducts(sortedProducts)
    }

    return (
        <div className="flex justify-end mr-4">
            <select id="sort" value={sortOption} onChange={(e) => handleSortChange(e.target.value)} className="border border-gray-300 rounded p-2">
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    )
}

export default SortMenu;
