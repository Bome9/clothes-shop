import Link from "next/link"
import Image from "next/image"
import s from './products.module.scss'

const ProductsPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center m-4 gap-12 mt-16 lg:flex-row">
            <Link href="/products/men">
                <div className={s.product}>
                    <Image
                        className={s.image}
                        priority
                        src='/men.png'
                        width={500}
                        height={500}
                        alt='jacket' />
                    <div className={s.productBtn}>
                        <p className={s.text} >Men</p>
                    </div>
                </div>
            </Link>
            <Link href="/products/women">
                <div className={s.product}>
                    <Image
                        className={s.image}
                        priority
                        src='/women.png'
                        width={500}
                        height={500}
                        alt='women' />
                    <div className={s.productBtn}>
                        <p className={s.text}>Women</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductsPage
