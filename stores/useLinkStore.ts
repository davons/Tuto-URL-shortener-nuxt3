import { defineStore, _UnwrapAll } from "pinia"
import type { ILink } from '@/types'
import { useAuthStore } from "./useAuthStore"
import { storeToRefs } from 'pinia'

export const useLinkStore = defineStore('link', () => {
    const links = ref<ILink[] | []>()
    const authStore = useAuthStore()
    const { token } = storeToRefs(authStore)

    //Get all links from DB
    async function getLinks() {
        const { data, error } = await useApiFetch('/links', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        })
        
        if (!error.value) {
            links.value = data.value as any
            return data.value;
        }
        return null;
    }

    //create a link
    async function create(payload: ILink) {
        const { data, error } = await useApiFetch(`/links`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            body: payload
        })
        if (!error.value) {
           return data.value
        }
        return null;
    }

    //update a link
    async function getLink(id: string){
        const { data, error} = await useApiFetch(`/links/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        })
        if (!error.value) {
            return data.value
        }
        return null;
    }
    
    //update a link
    async function update(id: string, payload: ILink) {
        const { data, error} = await useApiFetch(`/links/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            body: payload
        })
        if (!error.value) {
            return data.value;
        }
        return null;
    }

    //delete a link
    async function remove(id: string) {
        const { data, error } = await useApiFetch(`/links/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        })
        if (!error.value) {
            getLinks()
        }
    }

    return { 
        links,
        getLinks,
        getLink,
        create,
        update,
        remove
    }
})