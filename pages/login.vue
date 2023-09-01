<template>  
    <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold text-gray-900">
            Connexion
        </h2>
        <form @submit.prevent="handleLogin" class="mt-8 space-y-6 text-left">
            <BaseInput v-model="form.email" type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
            <BaseInput v-model="form.password" type="password" id="password" name="password" label="Mot de passe" placeholder="••••••••" autocomplete="current-password"/>
            <div class="flex items-start">
                <NuxtLink to="/forgot-password" class="ml-auto text-sm font-medium text-blue-600 hover:underline">Mot de passe oublié?</NuxtLink>
            </div>
            <BaseButton type="submit">Se connecter</BaseButton>
            <div class="text-sm font-medium text-gray-900">
                Pas encore inscrit? <NuxtLink to="/register" class="text-blue-600 hover:underline">Créer un compte</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/useAuthStore"

definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})

const router = useRouter();
const auth = useAuthStore();

const form = ref({
    email: "",
    password: ""
})

async function handleLogin() {
    try {
        await auth.login(form.value)
        router.push({ path:'/links', replace: true})
    }catch(e) {
        console.log(e)
    }
    
}
</script>