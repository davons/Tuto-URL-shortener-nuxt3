<template>
    <aside v-if="auth.isLoggedIn" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <NuxtLink to="/dashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <Icon name="material-symbols:dashboard" color="black" />
                        <span class="ml-3">Tableau de bord</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/links" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <Icon name="dashicons:admin-links" color="black"  />   
                        <span class="flex-1 ml-3 whitespace-nowrap">Mes URL courtes</span>
                    </NuxtLink>
                </li>
            </ul>
            <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <NuxtLink to="/my-account"  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <Icon name="bxs:user" color="black" />
                        <span class="flex-1 ml-3 whitespace-nowrap">Mon compte</span>
                    </NuxtLink>
                </li>
                <li>
                    <button @click="handleLogout" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <Icon name="basil:logout-solid" color="black" />
                        <span class="flex-1 ml-3 whitespace-nowrap">Se déconnecter</span>
                    </button>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
const auth = useAuthStore()
const router = useRouter()
async function handleLogout() {
    try {
        await auth.logout()
        router.push({ path:'/', replace: true})
    }catch(e) {
        console.log(e)
    }
}
</script>