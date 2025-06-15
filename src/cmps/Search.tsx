import { useState } from "react"

export function Search() {
    const [filterBy, setFilterBy] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setFilterBy(value)
    }

    return (
        <input type="text" onChange={handleChange} />
    )
}