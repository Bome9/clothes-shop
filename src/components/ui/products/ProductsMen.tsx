import Image from "next/image"
import Link from "next/link"
import s from './products.module.scss'

const ProductsMan: React.FC = () => {
    return (

        <Link href="/products/men">
            <div className={s.product}>
                <Image
                    className={s.image}
                    priority
                    src='/men.png'
                    width={600}
                    height={500}
                    alt='jacket' />
                <div className={s.productBtn}>
                    <p className="text-xl" >Men</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductsMan
