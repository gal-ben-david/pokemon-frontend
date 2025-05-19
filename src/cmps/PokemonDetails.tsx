import type { Pokemon } from "../interfaces"

export function PokemonDetails({ selectedPokemon, addToFavList }: { selectedPokemon: Pokemon, addToFavList: (pokemonId: number) => Promise<void> }) {

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
            {selectedPokemon.isFav ? <button>Remove from Fav list</button> : <button onClick={() => addToFavList(selectedPokemon.id)}>Add to Fav list</button>}
            {selectedPokemon.isFav && <div className="fav-poke-icon" style={{ left: '20px' }}><img src="/svg/fav-poke.svg"></img></div>}
        </>
    )

}