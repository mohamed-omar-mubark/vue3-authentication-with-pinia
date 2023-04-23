<template>
  <main>
    <h1>Home</h1>

    <div v-if="authStore.user">
      <p>
        {{ authStore.user.name }}
      </p>
      <p>
        {{ authStore.user.email }}
      </p>
    </div>

    <div v-else>
      <p>You are not logged in</p>
      <router-link :to="{ name: 'Login' }">Login now</router-link>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
  // get user
  await authStore.getUser();
});
</script>
