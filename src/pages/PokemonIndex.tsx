import { useEffect, useState } from "react"
import { pokemonService } from "../services/pokemon.service"

export function PokemonIndex() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                const pokemon = await pokemonService.query()
                console.log(pokemon)
            } catch (err) {
                console.error('Cannot load pokemons', err)
            }
        }

        loadPokemon()
    }, [])

    return (
        <section>
            <h1>Hi, Pokemon!</h1>
        </section>
    )
}