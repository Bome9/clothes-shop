import ProductsMan from "./ProductsMen"
import ProductsWomen from "./ProductsWomen"

const ProductsPage: React.FC = () => {
    return (
        <div className="flex justify-center text-center gap-12 mt-16">
            <ProductsMan />
            <ProductsWomen />
        </div>
    )
}

export default ProductsPage
