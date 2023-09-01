import { defineStore } from "pinia"
import type { Link } from '@/types'
import { useAuthStore } from "./useAuthStore"

export const useLinkStore = defineStore('link', () => {
    const links = ref<Link[] | null>(null)
    const { token } = useAuthStore()

    //Get all links from DB
    async function getAll() {
        const { data } = await useApiFetch('/links', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        links.value = data.value as Link[]
    }

    //create a link
    async function create(payload: Link) {
        const { error } = await useApiFetch(`/links`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: payload
        })
        if (!error.value) {
            getAll()
        }
    }

    //update a link
    async function update(id: any) {
        const { data, error} = await useApiFetch(`/links/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (!error.value) {
            getAll()
        }
    }

    //delete a link
    async function remove(id: any) {
        const { data, error } = await useApiFetch(`/links/${id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (!error.value) {
            getAll()
        }
    }

    return { 
        links,
        getAll,
        create,
        update,
        remove
    }
})