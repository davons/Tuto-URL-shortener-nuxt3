<template>  
    <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold text-gray-900">
            Inscription
        </h2>
        <form class="mt-8 space-y-6 text-left" action="#">
            <BaseInput type="text" id="name" name="name" label="Nom" placeholder="Jean Dupon"/>
            <BaseInput type="email" id="email" name="email" label="Email" placeholder="jean@gmail.com"/>
            <BaseInput type="password" id="password" label="Mot de passe" placeholder="••••••••"/>
            <BaseInput type="password" id="confirm_password" name="confirm_password" label="Confirmer mot de passe" placeholder="••••••••"/>
            <BaseButton>Enregistrer</BaseButton>
            <div class="text-sm font-medium text-gray-900">
                Déjà inscrit? <NuxtLink to="/auth/login" class="text-blue-600 hover:underline">Se connecter</NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth"
})
</script>