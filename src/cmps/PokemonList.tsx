import { useState } from "react"
import type { Pokemon } from "../interfaces"
import { Modal } from "./Modal"

export function PokemonList({ pokemon }: { pokemon: Pokemon }) {

    const [isOpen, setIsOpen] = useState(false)

    const onClose = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setIsOpen(false)
    }

    return (
        <li key={pokemon.id} onClick={() => setIsOpen(true)}>
            <p>{pokemon.name}</p>
            {
                isOpen &&
                <Modal isOpen={isOpen} onClose={onClose} title={pokemon.name}>
                    <p>{pokemon.abilities.map((item, i) => <span key={i}>{item.ability.name}</span>)}</p>
                    <p>{pokemon.types.map((item, i) => <span key={i}>{item.type.name}</span>)}</p>
                </Modal>
            }

        </li>
    )
}