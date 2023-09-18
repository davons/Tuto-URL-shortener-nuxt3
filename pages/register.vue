<template>  
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
                <NuxtLink to="/" class="flex items-center text-center mb-6 text-2xl font-semibold text-blue-600 hover:underline">
                    URLShortify    
                </NuxtLink>
                <div class="w-full bg-white shadow lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                    <h2 class="text-2xl font-bold text-gray-900">
                        Inscription
                    </h2>
                    <div v-if="hasErrors.value?.detail" class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div >
                            <span class="font-medium">Danger alert!</span>
                            {{ hasErrors.value?.detail }}
                        </div>
                    </div>
                    <Form
                        @submit="onSubmit"
                        :validation-schema="schema"
                        class="mt-8 space-y-6 text-left" action="#">
                            <BaseInput type="text" id="name" name="name" label="Nom" placeholder="Jean Dupon"/>
                            <BaseInput type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
                            <BaseInput  type="password" id="password" name="password" label="Mot de passe" placeholder="••••••••"/>
                            <BaseInput  type="password" id="confirm_password" name="confirmPassword" label="Confirmer mot de passe" placeholder="••••••••"/>
                            <BaseButton type="submit">Enregistrer</BaseButton>
                            <div class="text-sm font-medium text-gray-900">
                                Déjà inscrit? <NuxtLink to="/login" class="text-blue-600 hover:underline">Se connecter</NuxtLink>
                            </div>
                    </Form>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore"
import { storeToRefs } from "pinia"
import { Form } from "vee-validate"
import * as Yup from "yup"

useSeoMeta({
  title: 'Inscription',
})

definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})

const authStore = useAuthStore()
const router = useRouter()
const { hasErrors } = storeToRefs(authStore)

const schema = Yup.object().shape({
    name: Yup.string().min(4, "Nom trop courte.").required('Ce champ est obligatoire.'),
    email: Yup.string().email("Email incorrect.").required('Ce champ est obligatoire.'),
    password: Yup.string().min(6, "Mot de passe trop courte.").required('Ce champ est obligatoire.'),
    confirmPassword: Yup.string().min(6, "Le mot de passe doit être le même.")
        .required()
        .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas.'),
});

async function onSubmit(values: any) {
    await authStore.register({name: values.name, email: values.email, password: values.password })
    console.log(hasErrors)
}
</script>