import { httpService } from "./http.service"
import type { Pokemon } from "../interfaces"

const BASE_URL = 'pokemon/'

const query = (): Promise<Pokemon[]> => {
    return httpService.get(BASE_URL)
}

const loadFavList = (): Promise<Pokemon[]> => {
    return httpService.get(BASE_URL + 'favList')
}

const add = (pokemonId: string) => {
    return httpService.post(BASE_URL + pokemonId)
}

const remove = (pokemonId: string) => {
    return httpService.delete(BASE_URL + pokemonId)
}

export const pokemonService = {
    query,
    loadFavList,
    add,
    remove
}