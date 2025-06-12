<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500"
  >
    <div
      class="bg-white p-10 rounded-lg shadow-lg w-96 border-t-4 border-blue-600"
    >
      <h2 class="text-3xl font-bold mb-6 text-center text-blue-700">
        Create Account
      </h2>

      <form>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Username"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autocomplete="off"
            v-model="name"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Email address"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autocomplete="off"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Password (8-16 characters)"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autocomplete="new-password"
            v-model="password"
          />
        </div>
        <div>
          <button
            type="button"
            class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            @click="SighUp"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div class="text-center text-sm text-gray-600 mt-4">
        Already have an account?
        <button class="text-blue-600 font-bold hover:underline">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref();
const email = ref();
const password = ref();

async function SighUp() {
  console.log("sigh up successfull..", name.value, email.value, password.value);

  const result = await axios.post("http://localhost:3000/users", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  console.log(result.data);
  if (result.status == 201) {
    alert("Sigh Up successfully...");
  }

  localStorage.setItem("user-info", JSON.stringify(result.data));
}
</script>
