import { httpService } from "./http.service"
const BASE_URL = 'pokemon/'

const query = () => {
    return httpService.get(BASE_URL)
}

const loadFavList = () => {
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