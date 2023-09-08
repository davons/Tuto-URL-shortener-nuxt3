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
import { Form } from "vee-validate"
import * as Yup from "yup"

useSeoMeta({
  title: 'Inscription',
})

definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})

const auth = useAuthStore()
const router = useRouter()

const schema = Yup.object().shape({
    name: Yup.string().min(4, "Nom trop courte.").required(),
    email: Yup.string().email("Adresse email incorrect.").required(),
    password: Yup.string().min(6, "Mot de passe trop courte.").required(),
    confirmPassword: Yup.string().min(6, "Le mot de passe doit être le même.")
        .required()
        .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas.'),
});

async function onSubmit(values: any) {
    try {
        await auth.register({name: values.name, email: values.email, password: values.password })
    } catch(e) {
        console.log(e)
    }
}
</script>