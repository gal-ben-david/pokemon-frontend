export type FavoritesState = {
    favorites: number[]
}

export type FavoritesAction =
    | { type: 'ADD'; id: number }
    | { type: 'REMOVE'; id: number }
    | { type: 'SET_FAVORITES'; favorites: number[] }