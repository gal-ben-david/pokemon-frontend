import { httpService } from "./http.service"
import type { Pokemon } from "../interfaces"
import axios from "axios"

const BASE_URL = 'pokemon/'

const query = async (isOnlyFavPoke: boolean): Promise<Pokemon[]> => {
    const res = await axios.get(`http://localhost:3030/api/${BASE_URL}?isOnlyFavPoke=${isOnlyFavPoke}`)
    return await res.data
}

const add = (pokemonId: number): Promise<Pokemon> => {
    return httpService.post(BASE_URL, { pokemonId })
}

const remove = (pokemonId: number) => {
    return httpService.delete(BASE_URL + pokemonId)
}

export const pokemonService = {
    query,
    add,
    remove
}