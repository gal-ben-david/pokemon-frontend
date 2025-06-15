import type { FavoritesAction } from '../pokemon.types'

export const addToFavorites = (id: number): FavoritesAction => ({ type: 'ADD', id })
export const removeFromFavorites = (id: number): FavoritesAction => ({ type: 'REMOVE', id })
export const setFavorites = (favorites: number[]): FavoritesAction => ({ type: 'SET_FAVORITES', favorites })