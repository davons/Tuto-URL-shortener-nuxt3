<template>  
    <section class="bg-center">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <div class="w-full w-full bg-white shadow-sm p-6 space-y-8 sm:p-8 bg-white rounded-lg">
                <div class="container mx-auto flex flex-col items-center px-12 py-24 md:flex-row">
                    <div class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark md:text-5xl lg:text-6xl">URLShortify</h1>
                        <p class="mb-8 leading-relaxed">Ce projet est une application Vue3 utilisant Nuxt3.</p>
                        <p>
                            <NuxtLink to="/login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                <Icon name="dashicons:admin-links" color="white" class="mr-3" />   
                                Créer un lien
                            </NuxtLink> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
useSeoMeta({
  title: 'Accueil',
})
definePageMeta({
    layout: "auth",
    middleware: ["guest"]
})
</script>

<style>
</style>