<template>  
    <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold text-gray-900">
            Inscription
        </h2>
        <form @submit.prevent="handleRegister" class="mt-8 space-y-6 text-left" action="#">
            <BaseInput v-model="form.name" type="text" id="name" name="name" label="Nom" placeholder="Jean Dupon"/>
            <BaseInput v-model="form.email" type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
            <BaseInput v-model="form.plainPassword" type="password" id="password" label="Mot de passe" placeholder="••••••••"/>
            <BaseButton type="submit">Enregistrer</BaseButton>
            <div class="text-sm font-medium text-gray-900">
                Déjà inscrit? <NuxtLink to="/login" class="text-blue-600 hover:underline">Se connecter</NuxtLink>
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

const form = ref({
    email: "",
    name:"",
    plainPassword: ""
})

const auth = useAuthStore()
const router = useRouter()

async function handleRegister() {
    try {
        await auth.register(form.value)
        await auth.login({email: form.value.email, password: form.value.plainPassword})
        router.push({ path:'/links', replace: true})
    } catch(e) {
        console.log(e)
    }
}
</script>