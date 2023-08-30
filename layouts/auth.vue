<template>
<div class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NuxtLink to="/" class="flex items-center mb-6 text-2xl font-semibold text-blue-600">
            👋 URLShortify
        </NuxtLink>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <slot></slot>
        </div>
    </div>
</div>
</template>