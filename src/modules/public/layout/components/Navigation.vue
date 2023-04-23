<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-center space-x-4">
        <router-link
          :to="{ name: 'Home' }"
          :class="
            'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:text-blue-500' +
            ($route.name === 'Home' ? ' text-blue-500' : '')
          "
          aria-current="page"
        >
          Home
        </router-link>

        <router-link
          v-if="!authStore.user"
          :to="{ name: 'Login' }"
          :class="
            'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:text-blue-500' +
            ($route.name === 'Login' ? ' text-blue-500' : '')
          "
          aria-current="page"
        >
          Login
        </router-link>

        <button
          v-else
          @click="authStore.handleLogout"
          class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:text-blue-500 transition duration-300"
          aria-current="page"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>
