import Image from "next/image"
import Link from "next/link"
import s from './products.module.scss'

const ProductsWomen: React.FC = () => {
    return (

        <Link href="/products/women">
            <div className={s.product}>
                <Image
                    className={s.image}
                    priority
                    src='/women.png'
                    width={600}
                    height={500}
                    alt='jacket' />
                <div className={s.productBtn}>
                    <p className="text-xl">Women</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductsWomen
