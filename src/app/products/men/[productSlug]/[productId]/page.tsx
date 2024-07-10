import ProductDetailsPage from "@/components/ui/productDetails/ProductDetailsPage";

export default function ProductDetails({
    params,
}: {
    params: { productId: string, productSlug: string };
}) {
    return (
        <div>
            <ProductDetailsPage productId={params.productId} />
        </div>
    );
}
