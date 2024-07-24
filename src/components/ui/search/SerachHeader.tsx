import Image from "next/image"
import s from './search.module.scss'

interface SearchHeaderProps {
    setSearchIsOpen: () => void
    searchValue: string
    setSearchValue: (value: string) => void
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ setSearchIsOpen, searchValue, setSearchValue}) => {
    return (
        <div className={s.header}>
            <Image src="/search.svg" width={22} height={22} alt="search" />
            <form className={s.searchForm}>
                <input
                    className={s.searchInput}
                    placeholder="Search here..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
            </form>
            <button className="text-base font-medium" onClick={setSearchIsOpen}>Close</button>
        </div>
    )
}

export default SearchHeader