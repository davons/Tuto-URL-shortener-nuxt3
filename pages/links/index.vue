<template>  
      <div class="w-full p-6 space-y-8 sm:p-8 bg-white shadow-sm">
        <div class="relative overflow-x-auto">

            <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                <div class="w-full md:w-1/2">
                <form>
                    <BaseInput type="text" id="search" name="search" placeholder="Rechercher..."/>
                </form>
                </div>
                <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                    <NuxtLink to="/links/create" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                        <Icon name="gridicons:add-outline" color="white" class="mr-3" />Créer un lien
                    </NuxtLink>
                </div>
            </div>
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
                    <template v-if="links['hydra:totalItems']">
                        <tr v-for="link in links['hydra:member']" :key="link.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
import { storeToRefs } from 'pinia'

definePageMeta({
    middleware: ["authenticated"]
})
const linkStore = useLinkStore()
const { links } = storeToRefs(linkStore)
useAsyncData(async () =>  await linkStore.getLinks())
</script>

<style>
</style>