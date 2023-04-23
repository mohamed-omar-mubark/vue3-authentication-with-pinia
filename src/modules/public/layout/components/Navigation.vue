<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-center space-x-4">
        <router-link
          :to="{ name: 'Home' }"
          class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          Home
        </router-link>

        <router-link
          :to="{ name: 'Login' }"
          class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          Login
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
