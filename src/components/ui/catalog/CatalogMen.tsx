"use client"

import Preloader from "@/components/common/preloader/Preloader";
import Image from "next/image";
import { FC } from "react";
import s from './catalog.module.scss'
import SortMenu from "@/components/common/sortMenu/SortMenu";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import Link from "next/link";


const CatalogMen: FC = () => {

    const { products, loading, error, sortOption, originalProducts, setProducts, setSortOption } = useFetchProducts();

    if (loading) {
        return <Preloader />;
    }

    if (error) {
        return <div className="flex h-screen justify-center items-center">
            {error}
        </div>;
    }

    return (
        <div className="mt-4 p-4">
            <SortMenu sortOption={sortOption} setSortOption={setSortOption} originalProducts={originalProducts} setProducts={setProducts} />

            <div className="flex text-center justify-center">
                <div className={s.catalog}>
                    {products.map(product => (
                        <div key={product.id} className={s.product}>
                            <Link key={product.id} href={`/products/${product.slug}/${product.id}`}>
                                <Image
                                    className={s.image}
                                    src={product.images[0]}
                                    alt={product.name}
                                    width={500}
                                    height={500} />
                                <h2>{product.name}</h2>
                                <h2>$ {product.price}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CatalogMen;
