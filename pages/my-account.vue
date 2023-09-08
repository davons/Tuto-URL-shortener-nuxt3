<template>
      <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900">
            Mon compte
        </h2>
        <ul>
          <li class="mb-4">
              <h3>Nom</h3>
              <div class="text-gray-500">{{  user?.name  }}</div>
          </li>
          <li class="mb-4">
              <h3>Email</h3>
              <div class="text-gray-500">{{  user?.email  }}</div>
          </li>
      </ul>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore"

const { user } = useAuthStore()

useSeoMeta({
  title: 'Mon compte',
})

definePageMeta({
    middleware: ["authenticated"]
})
</script>

<style>
</style>