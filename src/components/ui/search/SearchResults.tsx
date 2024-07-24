import Link from 'next/link'
import s from './search.module.scss'
import Image from 'next/image'
import {IProduct}  from '../../../types/product.interface'


interface SearchResultsProps {
    filteredProducts: IProduct[]
    setSearchIsOpen: () => void
}

const SearchResults: React.FC<SearchResultsProps> = ({filteredProducts, setSearchIsOpen}) => {
    return (
        <div className={s.searchResults}>
            <h1 className={s.resultsHeader}>Search results:</h1>
            {filteredProducts.length > 0
                ? (
                    <div className={s.resultsWrapper}>
                        <div className={s.resultsAutocomplites}>
                            {filteredProducts.slice(0, 5).map(product => (
                                <Link className={s.autocomplite} key={product.id} onClick={setSearchIsOpen} href={`/products/${product.slug}/${product.id}`}>
                                    <Image src="/search.svg" width={14} height={14} alt="search" />
                                    {product.name.toLowerCase()}
                                </Link>
                            ))}
                        </div>

                        <div className={s.resultsProducts}>
                            {filteredProducts.slice(0, 3).map(product => (
                                <div key={product.id} className={s.product}>
                                    <Link key={product.id} onClick={setSearchIsOpen} href={`/products/${product.slug}/${product.id}`}>
                                        <Image
                                            className="h-[360px] w-[320px] object-cover object-center rounded-lg"
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
                )
                : (<p className={s.noResults}>No products found</p>)
            }
        </div>
    )
}

export default SearchResults