import { useState } from "react"
import { pokemonService } from "../services/pokemon.service"
import { PokemonList } from "../cmps/PokemonList"
import { useQuery } from '@tanstack/react-query'
import { usePokemonDispatch } from '../context/pokemon.context'
import { addToFavorites, removeFromFavorites } from '../context/actions/pokemon.actions'


export function PokemonIndex() {
    const [visibleCount, setVisibleCount] = useState(14)
    const [isOnlyFavPoke, setIsOnlyFavPoke] = useState(false)
    const dispatch = usePokemonDispatch()

    const { data: pokemons = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: ['pokemons', isOnlyFavPoke],
        queryFn: () =>
            isOnlyFavPoke
                ? pokemonService.loadFavList()
                : pokemonService.query()
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOnlyFavPoke(e.target.checked)
    }

    const addToFavList = async (pokemonId: number) => {
        await pokemonService.add(pokemonId)
        dispatch(addToFavorites(pokemonId))

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
            <PokemonList visibleCount={visibleCount}
                pokemons={pokemons}
                title={'Pokémon List'}
                handleChange={handleChange}
                isOnlyFavPoke={isOnlyFavPoke}
                addToFavList={addToFavList}
                removeFromFavList={removeFromFavList} />

            {visibleCount < pokemons.length && (
                <button onClick={() => setVisibleCount(prev => prev + 14)}>Load More</button>
            )}
        </section>
    )
}