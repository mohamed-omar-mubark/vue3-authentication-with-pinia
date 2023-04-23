<template>
  <main>
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <input type="email" v-model="form.email" />
      <input type="password" v-model="form.password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  email: "client@promoterss.com",
  password: "123456789"
});

const handleLogin = async () => {
  const { data } = await axios.post("login", form.value);
  // set token to local storage
  localStorage.setItem("token", data.data.token);
  // redirect to home page
  router.push({ name: "Home" });
};
</script>
