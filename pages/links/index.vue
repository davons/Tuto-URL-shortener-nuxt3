<template>  
      <div class="w-full p-6 space-y-8 sm:p-8 bg-white shadow-sm">
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Url court
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date création
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date modification
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="linkStore.links?.length">
                        <tr v-for="link in linkStore.links" :key="link.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ link.shortLink }}
                            </th>
                            <td class="px-6 py-4">
                                {{ link.createdAt }}
                            </td>
                            <td class="px-6 py-4">
                                {{ link.updatedAt }}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
      </div>
</template>

<script setup lang="ts">
import { useLinkStore } from '@/stores/useLinkStore';

definePageMeta({
    middleware: ["authenticated"]
})
const linkStore = useLinkStore();
useAsyncData(async() => await linkStore.getAll())
</script>

<style>
</style>