<template>
  <header class="bg-gray-100 text-blue-500 w-full shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="text-2xl font-bold tracking-wide">🍴 The Restaurant</div>

      <nav class="hidden md:flex space-x-8 text-lg p-2 font-semibold">
        <router-link
          to="/"
          class="hover:text-green-600 transition"
          active-class="font-semibold text-green-500"
        >
          Home
        </router-link>
        <router-link
          to="/add-restaurant"
          class="hover:text-green-600 transition"
          active-class="font-semibold text-green-500"
        >
          Add Restaurant
        </router-link>
        <router-link
          to="/update-restaurant"
          class="hover:text-green-600 transition"
          active-class="font-semibold text-green-500"
        >
          Update Restaurant
        </router-link>
        <button @click="logout" class="hover:text-red-500 transition">
          Logout
        </button>
      </nav>

      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="focus:outline-none">☰</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.removeItem("user-info");
  router.push("/sign-in");
}

function toggleMobileMenu() {
  alert("Mobile menu coming soon!");
}
</script>
