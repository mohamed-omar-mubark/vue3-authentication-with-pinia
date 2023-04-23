<template>
  <div class="main flex justify-center items-center h-20">
    <div v-if="authStore.user">
      <strong>
        Welcome back,
        <span class="text-blue-500">{{ authStore.user.name }}</span>
      </strong>
    </div>

    <strong v-else>You are not logged in</strong>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import Cookies from "js-cookie";

const authStore = useAuthStore();

onMounted(async () => {
  // get user
  Cookies.get("token") ? await authStore.getUser() : null;
});
</script>
