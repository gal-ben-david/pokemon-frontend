import { useState } from "react"
import type { Pokemon } from "../interfaces"
import { Modal } from "./Modal"
import { PokemonDetails } from "./PokemonDetails"
import { PokemonPreview } from "./PokemonPreview"

export function PokemonList({ pokemons, visibleCount, title, isOnlyFavPoke, handleChange }:
    { pokemons: Pokemon[], visibleCount: number, title: string, isOnlyFavPoke: boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

    const onClose = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setSelectedPokemon(null)
    }

    return (
        <>
            <h1>{title}</h1>
            <label>
                <input type="checkbox" onChange={handleChange} checked={isOnlyFavPoke} />
                Show only Fav Pokémon
            </label>

            <ul className="pokemon-list">
                {pokemons.slice(0, visibleCount).map(pokemon =>
                    <PokemonPreview pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} />
                )}

                {selectedPokemon && (
                    <Modal isOpen={true} onClose={onClose} title={selectedPokemon.name}>
                        <PokemonDetails selectedPokemon={selectedPokemon} />
                    </Modal>
                )}
            </ul>
        </>
    )
}