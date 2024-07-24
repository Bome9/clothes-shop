import {motion} from "framer-motion"
import s from './search.module.scss'

interface SearchOverlayProps {
    setSearchIsOpen: () => void
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ setSearchIsOpen }) => {
    return (
        <motion.div
            className={s.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={setSearchIsOpen}
        />
    )
}


export default SearchOverlay