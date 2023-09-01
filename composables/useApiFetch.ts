import { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig(); 
    let headers: any = {}

    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(["refer", "cookie"])
        }
    }

    return useFetch(path, {
            baseURL: config.public.apiBaseUrl,
            watch: false,
            ...options,
            headers: {
                ...headers,
                ...options?.headers
            }
    })
}