import type { Pokemon } from "../interfaces"

export function PokemonDetails({ selectedPokemon }: { selectedPokemon: Pokemon }) {

    if (!selectedPokemon) return null

    return (
        <>
            <p>
                {selectedPokemon.abilities.map((item, i) => (
                    <span key={i}>{item.ability.name}</span>
                ))}
            </p>
            <p>
                {selectedPokemon.types.map((item, i) => (
                    <span key={i}>{item.type.name}</span>
                ))}
            </p>
            {selectedPokemon.isFav ? <button>Remove from Fav list</button> : <button>Add to Fav list</button>}
            {selectedPokemon.isFav && <div className="fav-poke-icon" style={{ left: '20px' }}><img src="/svg/fav-poke.svg"></img></div>}
        </>
    )

}