import { useState } from "react";



const FilterMenu = () => {

    const [filterIsOpen, setFilterIsOpen] = useState(false);

    console.log(filterIsOpen)

    return (
        <div>
            <button className="px-6 py-2 border transition duration-300 hover:bg-slate-300" onClick={() => setFilterIsOpen(!filterIsOpen)}>Filter</button>

            {filterIsOpen && (
                <div>
                    Filtering
                </div>
            )}
        </div>
    )
}

export default FilterMenu