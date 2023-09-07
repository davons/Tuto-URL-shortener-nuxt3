import { defineStore } from "pinia"
import type { IUser, ICredentials, IRegistration } from '@/types'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<IUser | null>(null)
    const token = useStorage('AUTH_TOKEN', null)
    const isLoggedIn = computed(() => !!user.value)
    
    //login with email and password
    async function login(payload: ICredentials) {
        const { data, error } = await useApiFetch('/login', {
            method: "POST",
            body: payload
        })
        if (!error.value) {
            token.value = data.value?.token
            await fetchUser();
        }
    }

    //register an user
    async function register(payload: IRegistration) {
        await useApiFetch('/register', {
            method: "POST",
            body: payload
        })
    }

    //forgot password
    async function forgotPassword(payload: any) {
        const {data, error} = await useApiFetch('/forgot-password', {
            method: "POST",
            body: payload
        })
        if (!error.value) {
            return data.value
        }
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
        user.value = null
        token.value = null
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
            user.value = data.value as IUser
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