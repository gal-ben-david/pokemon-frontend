import { useState, useEffect } from "react"
import type { Pokemon } from "../interfaces"
import { Modal } from "./Modal"
import { PokemonDetails } from "./PokemonDetails"
import { PokemonPreview } from "./PokemonPreview"

export function PokemonList({ pokemons, visibleCount, title, isOnlyFavPoke, handleChange, addToFavList, removeFromFavList }:
    {
        pokemons: Pokemon[],
        visibleCount: number,
        title: string,
        isOnlyFavPoke: boolean,
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        addToFavList: (pokemonId: number) => Promise<void>
        removeFromFavList: (pokemonId: number) => Promise<void>
    }) {

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

    useEffect(() => {
        if (!selectedPokemon) return
        const updatedSelected = pokemons.find(p => p.id === selectedPokemon.id)
        if (updatedSelected) setSelectedPokemon(updatedSelected)
    }, [selectedPokemon])

    const onClose = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setSelectedPokemon(null)
    }

    return (
        <>
            <label>
                <input type="checkbox" onChange={handleChange} checked={isOnlyFavPoke} />
                Show only Fav Pokémon
            </label>

            <ul className="pokemon-list">
                {pokemons.slice(0, visibleCount).map(pokemon =>
                    <PokemonPreview key={pokemon.id} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} />
                )}

                {selectedPokemon && (
                    <Modal isOpen={true} onClose={onClose} title={selectedPokemon.name}>
                        <PokemonDetails selectedPokemon={selectedPokemon} addToFavList={addToFavList} removeFromFavList={removeFromFavList} />
                    </Modal>
                )}
            </ul>
        </>
    )
}