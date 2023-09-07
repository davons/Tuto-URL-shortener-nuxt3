import { defineStore } from "pinia"
import type { ILink } from '@/types'
import { useAuthStore } from "./useAuthStore"

export const useLinkStore = defineStore('link', () => {
    const links = ref<ILink[] | null>(null)
    const { token } = useAuthStore()

    //Get all links from DB
    async function getAll() {
        const { data } = await useApiFetch('/links', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        links.value = data.value as ILink[]
    }

    //create a link
    async function create(payload: ILink) {
        const { error } = await useApiFetch(`/links`, {
            method: 'POST',
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
    async function update(id: string, payload: ILink) {
        const { data, error} = await useApiFetch(`/links/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: payload
        })
        if (!error.value) {
            getAll()
        }
    }

    //delete a link
    async function remove(id: string) {
        const { data, error } = await useApiFetch(`/links/${id}`, {
            method: 'DELETE',
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