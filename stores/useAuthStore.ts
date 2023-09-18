import { defineStore } from "pinia"
import type { IUser, ICredentials, IRegistration } from '@/types'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<IUser | null>(null)
    const token = ref<string | null>('')
    const isLoggedIn = computed(() => !!user.value)
    const hasErrors = ref<any>()
    
    //login with email and password
    async function login(payload: ICredentials) {
        const { data, error } = await useApiFetch('/login', {
            method: "POST",
            body: payload
        })
        if (!error.value) {
            token.value = data.value?.token
            await fetchUser();
        } else {
            hasErrors.value = error.value?.data
        }
    }

    //register an user
    async function register(payload: IRegistration) {
        const {data, error} = await useApiFetch('/register', {
            method: "POST",
            body: payload
        })

        if (error.value) {
            hasErrors.value = error.value?.data
        }

    }

    //forgot password
    async function forgotPassword(payload: any) {
        const {data, error} = await useApiFetch('/forgot-password', {
            method: "POST",
            body: payload
        })
        if (error.value) {
            hasErrors.value = error.value?.data
        }
    }

    //change password
    async function changePassword(payload: any) {
        const {data, error} = await useApiFetch('/change-password', {
            method: "POST",
            body: payload,
            headers: {
                Authorization: `Bearer ${token.value}`,
            }
        })
        if (error.value) {
            hasErrors.value = error.value?.data
        }
    }

    //reset password
    async function resetPassword(payload: any) {
        const {data, error } = await useApiFetch('/reset-password', {
            method: "POST",
            body: payload
        })
        if (error.value) {
            hasErrors.value = error.value?.data
        }
    }
    
    //logout
    async function logout() {
        user.value = null
        token.value = null
    }

    //fetch the current user
    async function fetchUser() {
        if (user.value) {
            return user.value
        }  
        const { data, error } = await useApiFetch('/profile', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            pick: ['id', 'name', 'email'],
        })
        if (error.value) {
            hasErrors.value = error.value?.data
        }
    }

    return { 
        user, 
        isLoggedIn,
        token,
        hasErrors,
        login, 
        fetchUser, 
        logout,
        register,
        forgotPassword,
        changePassword,
        resetPassword,
    }
})