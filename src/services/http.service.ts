import Axios from 'axios'
import type { AxiosRequestConfig, Method } from 'axios'

const BASE_URL = import.meta.env.PROD
    ? '/api/'
    : '//localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get<T>(endpoint: string, data?: any) {
        return ajax<T>(endpoint, 'GET', data)
    },
    post<T>(endpoint: string, data?: any) {
        return ajax<T>(endpoint, 'POST', data)
    },
    put<T>(endpoint: string, data: any) {
        return ajax<T>(endpoint, 'PUT', data)
    },
    delete<T>(endpoint: string, data?: any) {
        return ajax<T>(endpoint, 'DELETE', data)
    }
}

async function ajax<T>(endpoint: string, method: Method = 'GET', data: any = null): Promise<T> {

    try {
        const config: AxiosRequestConfig = {
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: method === 'GET' ? data : undefined
        }

        const res = await axios.request<T>(config)
        return res.data
    } catch (err: any) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            console.warn('Not Authenticated')
        }
        throw err
    }
}