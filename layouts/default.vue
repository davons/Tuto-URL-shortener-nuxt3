<template>
    <TheHeader />
    <TheAside />
    <main class="bg-gray-50">
        <div class="p-4 sm:ml-64">
            <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
                <slot></slot>
            </div>
        </div>
    </main>
</template>