import { defineStore } from "pinia"
import type { User, Credentials, Registration } from '@/types'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const token = ref<string | null>(null)
    const isLoggedIn = computed(() => !!user.value)
    
    //login with email and password
    async function login(payload: Credentials) {
        const { data, error } = await useApiFetch('/login', {
            method: "POST",
            body: payload
        })
        if (!error.value) {
            token.value = data.value?.token as string
            await fetchUser();
        }
    }

    //register an user
    async function register(payload: Registration) {
        await useApiFetch('/users', {
            method: "POST",
            body: payload
        })
    }

    //logout
    async function logout() {
        /*await useApiFetch('/logout', {
            method: "POST"
        })*/
        user.value = null
        token.value = ""
    }

    //fetch the current user
    async function fetchUser() {
        const { data, error } = await useApiFetch('/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            pick: ['id', 'name', 'email'],
        })
        if (!error.value) {
            user.value = data.value as User
        }
    }

    return { 
        user, 
        isLoggedIn,
        token,
        login, 
        fetchUser, 
        logout,
        register
    }
})