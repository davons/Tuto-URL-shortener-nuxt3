<template>  
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 "> 
                <NuxtLink to="/" class="flex items-center text-center mb-6 text-2xl font-semibold text-blue-600 hover:underline">
                    URLShortify    
                </NuxtLink>   
                <div class="w-full w-full bg-white shadow lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                    <h2 class="text-2xl font-bold text-gray-900">
                        Connexion
                    </h2>
                    <Form
                        @submit="onSubmit"
                        :validation-schema="schema"
                        class="mt-8 space-y-6 text-left">
                            <BaseInput type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
                            <BaseInput type="password" id="password" name="password" label="Mot de passe" placeholder="••••••••"/>
                            <div class="flex items-start">
                                <NuxtLink to="/forgot-password" class="ml-auto text-sm font-medium text-blue-600 hover:underline">Mot de passe oublié?</NuxtLink>
                            </div>
                            <BaseButton type="submit">Se connecter</BaseButton>
                        <div class="text-sm font-medium text-gray-900">
                            Pas encore inscrit? <NuxtLink to="/register" class="text-blue-600 hover:underline">Créer un compte</NuxtLink>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore"
import { Form } from 'vee-validate'
import * as Yup from 'yup';

useSeoMeta({
  title: 'Login',
})

definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})

const router = useRouter();
const auth = useAuthStore();

const schema = Yup.object().shape({
    email: Yup.string().email('Adresse email incorrect.').required(),
    password: Yup.string().min(4, "Mot de passe trop court.").required(),
});

async function onSubmit(values: any) {
  try {
        await auth.login(values)
        if (auth.isLoggedIn) {
            router.push({ path:'/links', replace: true})
        }
    } catch(e) {
        console.log(e)
    }
}
</script>