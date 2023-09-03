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
        await useApiFetch('/register', {
            method: "POST",
            body: payload
        })
    }

    //forgot password
    async function forgotPassword(payload: any) {
        await useApiFetch('/forgot-password', {
            method: "POST",
            body: payload
        })
    }

    //change password
    async function changePassword(payload: any) {
        await useApiFetch('/change-password', {
            method: "POST",
            body: payload,
            headers: {
                Authorization: `Bearer ${token.value}`,
            }
        })
    }

    //reset password
    async function resetPassword(payload: any) {
        await useApiFetch('/reset-password', {
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
        const { data, error } = await useApiFetch('/profile', {
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
        register,
        forgotPassword,
        changePassword,
        resetPassword,
    }
})