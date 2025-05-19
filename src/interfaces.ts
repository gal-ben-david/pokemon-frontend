import type { ReactNode } from 'react'

type Abilities = {
    ability: { name: string, url: string }
    is_hidden: boolean
    slot: number
}

type Type = {
    type: { name: string, url: string }
    slot: number
}
export interface Pokemon {
    name: string
    abilities: Abilities[]
    types: Type[]
    isFav: boolean
    id: number
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
}