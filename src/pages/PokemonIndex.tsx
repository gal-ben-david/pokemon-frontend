import { useEffect, useState } from "react"
import { pokemonService } from "../services/pokemon.service"
import type { Pokemon } from "../interfaces"
import { PokemonList } from "../cmps/PokemonList"


export function PokemonIndex() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [visibleCount, setVisibleCount] = useState(14)
    const [isOnlyFavPoke, setIsOnlyFavPoke] = useState(false)

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                const fetchFn = isOnlyFavPoke
                    ? pokemonService.loadFavList
                    : pokemonService.query

                const pokemon = await fetchFn()
                setPokemons(pokemon)
                console.log('pokemon', pokemons)
            } catch (err) {
                console.error('Cannot load pokemons', err)
            }
        }
        loadPokemon()
    }, [isOnlyFavPoke])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOnlyFavPoke(e.target.checked)
    }

    return (
        <section className="pokemon-index">
            <PokemonList visibleCount={visibleCount}
                pokemons={pokemons}
                title={'Pokémon List'}
                handleChange={handleChange}
                isOnlyFavPoke={isOnlyFavPoke} />

            {visibleCount < pokemons.length && (
                <button onClick={() => setVisibleCount(prev => prev + 14)}>Load More</button>
            )}
        </section>
    )
}