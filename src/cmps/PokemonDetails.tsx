import { useEffect, useState } from "react"
import type { Pokemon } from "../interfaces"

export function PokemonDetails({ selectedPokemon, addToFavList, removeFromFavList }:
    {
        selectedPokemon: Pokemon,
        addToFavList: (pokemonId: number) => Promise<void>,
        removeFromFavList: (pokemonId: number) => Promise<void>
    }) {

    if (!selectedPokemon) return null

    const [isFav, setIsFav] = useState(selectedPokemon.isFav)
    useEffect(() => {
        setIsFav(selectedPokemon.isFav)
    }
        , [selectedPokemon])

    return (
        <>
            <p className="poke-details">
                <span>Abilities:</span>
                {selectedPokemon.abilities.map((item, i) => (
                    <span key={i}>{item.ability.name}</span>
                ))}
            </p>
            <p className="poke-details">
                <span>types:</span>
                {selectedPokemon.types.map((item, i) => (
                    <span key={i}>{item.type.name}</span>
                ))}
            </p>
            {isFav ? <button onClick={() => removeFromFavList(selectedPokemon.id)}>Remove from Fav list</button>
                : <button onClick={() => { addToFavList(selectedPokemon.id) }}>Add to Fav list</button>}
            {isFav && <div className="fav-poke-icon" style={{ left: '20px' }}><img src="/svg/fav-poke.svg"></img></div>}
        </>
    )
}