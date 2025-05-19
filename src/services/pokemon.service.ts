import { httpService } from "./http.service"
import type { Pokemon } from "../interfaces"

const BASE_URL = 'pokemon/'

const query = (): Promise<Pokemon[]> => {
    return httpService.get(BASE_URL)
}

const loadFavList = (): Promise<Pokemon[]> => {
    return httpService.get(BASE_URL + 'favList')
}

const add = (pokemonId: number): Promise<Pokemon> => {
    return httpService.post(BASE_URL, { pokemonId })
}

const remove = (pokemonId: number) => {
    return httpService.delete(BASE_URL + pokemonId, { pokemonId })
}

export const pokemonService = {
    query,
    loadFavList,
    add,
    remove
}