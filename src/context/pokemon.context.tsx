import { createContext, useReducer, useContext } from 'react'
import type { Dispatch, ReactNode } from 'react'
import { pokemonReducer, initialState } from './reducers/pokemon.reducer'
import type { FavoritesState, FavoritesAction } from './pokemon.types'

const PokemonStateContext = createContext<FavoritesState | undefined>(undefined)
const PokemonDispatchContext = createContext<Dispatch<FavoritesAction> | undefined>(undefined)


export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(pokemonReducer, initialState)

    return (
        <PokemonStateContext.Provider value={state}>
            <PokemonDispatchContext.Provider value={dispatch}>
                {children}
            </PokemonDispatchContext.Provider>
        </PokemonStateContext.Provider>
    )
}

export const usePokemonState = () => {
    const context = useContext(PokemonStateContext)
    if (!context) throw new Error('usePokemonState must be used within a PokemonProvider')
    return context
}

export const usePokemonDispatch = () => {
    const context = useContext(PokemonDispatchContext)
    if (!context) throw new Error('usePokemonDispatch must be used within a PokemonProvider')
    return context
}