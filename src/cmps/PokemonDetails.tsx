import type { Pokemon } from "../interfaces"

export function PokemonDetails({ selectedPokemon, addToFavList, onClose }:
    { selectedPokemon: Pokemon, addToFavList: (pokemonId: number) => Promise<void>, onClose: () => void }) {

    if (!selectedPokemon) return null

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
            {selectedPokemon.isFav ? <button>Remove from Fav list</button> : <button onClick={() => { addToFavList(selectedPokemon.id); onClose() }}>Add to Fav list</button>}
            {selectedPokemon.isFav && <div className="fav-poke-icon" style={{ left: '20px' }}><img src="/svg/fav-poke.svg"></img></div>}
        </>
    )

}