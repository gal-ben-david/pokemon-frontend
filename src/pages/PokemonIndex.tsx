import { useEffect, useState } from "react"
import { pokemonService } from "../services/pokemon.service"
import type { Pokemon } from "../interfaces"
import { PokemonList } from "../cmps/PokemonList"


export function PokemonIndex() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [visibleCount, setVisibleCount] = useState(20)

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                const pokemon = await pokemonService.query()
                setPokemons(pokemon)
                console.log(pokemon)
            } catch (err) {
                console.error('Cannot load pokemons', err)
            }
        }

        loadPokemon()
    }, [])

    return (
        <section>
            <ul>
                {pokemons.slice(0, visibleCount).map(poke =>
                    <PokemonList pokemon={poke} />
                )}
            </ul>

            {visibleCount < pokemons.length && (
                <button onClick={() => setVisibleCount(prev => prev + 20)}>Load More</button>
            )}
        </section>
    )
}