<template>  
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                <NuxtLink to="/" class="flex items-center text-center mb-6 text-2xl font-semibold text-blue-600 hover:underline">
                    URLShortify    
                </NuxtLink>   
                <div class="w-full shadow lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                    <h2 class="text-2xl font-bold text-gray-900">
                        Mot de passe oublié ?
                    </h2>
                    <Form
                        @submit="onSubmit"
                        :validation-schema="schema"
                        class="mt-8 space-y-6 text-left" action="#">
                            <BaseInput type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
                            <BaseButton type="submit">Réinitialiser mot de passe</BaseButton>
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
  title: 'Mot de passe oublié.',
})

definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})

const router = useRouter();
const auth = useAuthStore();

const schema = Yup.object().shape({
    email: Yup.string().email('Email incorrect.').required('Ce champ est obligatoire.'),
});

async function onSubmit(values: any) {
  try {
      const data = await auth.forgotPassword(values)
      console.log(data)
    } catch(e) {
        console.log(e)
    }
}
</script>