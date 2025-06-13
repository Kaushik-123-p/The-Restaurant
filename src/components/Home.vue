<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <Header />
    <h1 class="text-2xl font-bold">
      Hello {{ userName }}, Welcome to Our Restaurant
    </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";

const router = useRouter();

const userName = ref("");

onMounted(() => {
  // console.log("Mounted...");
  const user = localStorage.getItem("user-info");
  if (!user) {
    router.push("/sign-in");
  } else {
    const parsedUser = JSON.parse(user);
    userName.value = parsedUser.name || "User";
  }
});
</script>
