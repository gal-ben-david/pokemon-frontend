import { useState } from "react"
import type { Pokemon } from "../interfaces"
import { Modal } from "./Modal"

export function PokemonList({ pokemons, visibleCount, title }: { pokemons: Pokemon[], visibleCount: number, title: string }) {

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

    const onClose = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setSelectedPokemon(null)
    }

    return (
        <>
            <h1>{title}</h1>
            <ul className="pokemon-list">
                {pokemons.slice(0, visibleCount).map(pokemon =>

                    <li key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
                        <p>{pokemon.name}</p>
                        {pokemon.isFav && <div className="fav-poke-icon"><img src="/svg/fav-poke.svg"></img></div>}
                    </li>)}

                {selectedPokemon && (
                    <Modal isOpen={true} onClose={onClose} title={selectedPokemon.name}>
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
                        {selectedPokemon.isFav && <div className="fav-poke-icon" style={{ left: '20px' }}><img src="/svg/fav-poke.svg"></img></div>}
                    </Modal>
                )}

            </ul>
        </>
    )
}