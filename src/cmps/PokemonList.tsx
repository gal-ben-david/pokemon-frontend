import type { Pokemon } from "../interfaces"

export function PokemonList({ pokemon }: { pokemon: Pokemon }) {

    return (
        <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <p>{pokemon.abilities.map((item, i) => <span key={i}>{item.ability.name}</span>)}</p>
            <p>{pokemon.types.map((item, i) => <span key={i}>{item.type.name}</span>)}</p>
        </li>
    )
}