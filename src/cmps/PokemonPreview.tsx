import type { Pokemon } from "../interfaces"

export function PokemonPreview({
    pokemon,
    setSelectedPokemon
}: {
    pokemon: Pokemon,
    setSelectedPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>
}) {
    return (
        <li key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
            <p>{pokemon.name}</p>
            {pokemon.isFav && <div className="fav-poke-icon"><img src="/svg/fav-poke.svg"></img></div>}
        </li>
    )
}