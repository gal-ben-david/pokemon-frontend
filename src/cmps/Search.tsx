import { debounce } from '../services/util.service'
import { useRef, useState } from "react"

export function Search({ filterBy, setFilterBy }: { filterBy: string, setFilterBy: (value: string) => void }) {

    const [inputValue, setInputValue] = useState(filterBy)

    const debouncedSetFilterBy = useRef(debounce(setFilterBy, 300))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        debouncedSetFilterBy.current(value)
    }
    return (
        <input type="text"
            className="pokemon-name"
            placeholder="Search by name"
            value={inputValue}
            onChange={handleChange} />
    )
}