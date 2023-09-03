<template>  
    <section class="bg-center">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark md:text-5xl lg:text-6xl">URLShortify</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Démonstration Nuxt3 & API platform3</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <NuxtLink to="/login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    <Icon name="dashicons:admin-links" color="white" class="mr-3" />   
                    Créer un lien
                </NuxtLink> 
            </div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})
</script>

<style>
</style>