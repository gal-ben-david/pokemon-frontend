import type { FavoritesState, FavoritesAction } from '../pokemon.types'

export const initialState: FavoritesState = {
    favorites: [],
}

export function pokemonReducer(state: FavoritesState = initialState, action: FavoritesAction): FavoritesState {
    switch (action.type) {
        case 'SET_FAVORITES':
            return { ...state, favorites: action.favorites }
        case 'ADD':
            return { favorites: [...state.favorites, action.id] }
        case 'REMOVE':
            return { favorites: state.favorites.filter(id => id !== action.id) }
        default:
            return state
    }
}