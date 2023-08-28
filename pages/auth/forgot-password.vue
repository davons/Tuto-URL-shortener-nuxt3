<template>  
    <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold text-gray-900">
            Mot de passe oublié ?
        </h2>
        <form class="mt-8 space-y-6 text-left" action="#">
            <BaseInput type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
            <BaseButton>Réinitialiser mot de passe</BaseButton>
            <div class="text-sm font-medium text-gray-900">
                Pas encore inscrit? <NuxtLink to="/auth/register" class="text-blue-600 hover:underline">Créer un compte</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth"
})
</script>