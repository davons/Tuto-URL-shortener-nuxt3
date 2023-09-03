import { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig(); 
    const token = useCookie('BEARER')
    let headers: any = {}

    if (token.value) {
        headers['BEARER'] = token.value as string
    }

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