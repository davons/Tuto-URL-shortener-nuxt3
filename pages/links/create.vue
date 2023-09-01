<template>  
    <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold text-gray-900">
            Créer un nouveau lien
        </h2>
        <form @submit.prevent="handleCreateLink" class="mt-8 space-y-6 text-left">
            <BaseInput v-model="form.full_link" type="text" id="full_link" name="full_link" label="Lien" placeholder="http://..."/>
            <BaseButton type="submit">Créer lien</BaseButton>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/useAuthStore"
import { nanoid } from "nanoid"

definePageMeta({
    middleware: ["authenticated"]
})

const form = ref({
    short_link: "",
    full_link: ""
})

const auth = useAuthStore()

async function handleCreateLink() {
    try {
        await auth.create({
            ...form.value,
            short_link: nanoid()
        })
    } catch(e) {
        console.log(e)
    }
}
</script>