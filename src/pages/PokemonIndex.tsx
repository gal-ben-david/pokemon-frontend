import { useState, useMemo } from "react"
import { pokemonService } from "../services/pokemon.service"
import { PokemonList } from "../cmps/PokemonList"
import { useQuery } from '@tanstack/react-query'
import { usePokemonDispatch } from '../context/pokemon.context'
import { addToFavorites, removeFromFavorites } from '../context/actions/pokemon.actions'
import { Search } from '../cmps/Search'


export function PokemonIndex() {
    const [visibleCount, setVisibleCount] = useState(14)
    const [isOnlyFavPoke, setIsOnlyFavPoke] = useState(false)
    const [filterBy, setFilterBy] = useState('')
    const dispatch = usePokemonDispatch()

    // const { data: favPokemons = [], refetch: refetchFav, isLoading: isLoadingFav, isError: isErrorFav, error: errorFav} = useQuery({
    //     queryKey: ['favPokemons', isOnlyFavPoke],
    //     enabled: isOnlyFavPoke,
    //     queryFn: () =>
    //         pokemonService.loadFavList()
    // })

    const { data: pokemons = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: ['pokemons', isOnlyFavPoke],
        queryFn: () =>
            pokemonService.query(isOnlyFavPoke)
    })

    const filteredPokemons = useMemo(() => {
        return pokemons.filter(poke =>
            poke.name.toLowerCase().includes(filterBy.toLowerCase())
        )
    }, [filterBy, pokemons])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOnlyFavPoke(e.target.checked)
    }

    const addToFavList = async (pokemonId: number) => {
        const addedPoke = await pokemonService.add(pokemonId)
        dispatch(addToFavorites(addedPoke.id))

        refetch()
    }

    const removeFromFavList = async (pokemonId: number) => {
        await pokemonService.remove(pokemonId)
        dispatch(removeFromFavorites(pokemonId))

        refetch()
    }

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>

    return (
        <section className="pokemon-index">
            <h1>Pokémon List</h1>
            <Search filterBy={filterBy} setFilterBy={setFilterBy} />

            <PokemonList visibleCount={visibleCount}
                pokemons={filteredPokemons}
                title={'Pokémon List'}
                handleChange={handleChange}
                isOnlyFavPoke={isOnlyFavPoke}
                addToFavList={addToFavList}
                removeFromFavList={removeFromFavList} />

            {visibleCount < filteredPokemons.length && (
                <button onClick={() => setVisibleCount(prev => prev + 14)}>Load More</button>
            )}
        </section>
    )
}