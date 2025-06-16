
export function Search({ filterBy, setFilterBy }: { filterBy: string, setFilterBy: (value: string) => void }) {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setFilterBy(value)
    }

    return (
        <input type="text"
            className="pokemon-name"
            placeholder="Search by name"
            value={filterBy}
            onChange={handleChange} />
    )
}