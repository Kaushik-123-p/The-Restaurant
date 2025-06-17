<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4">
    <Header />

    <div class="bg-white shadow-md rounded-lg w-full max-w-md p-6 mt-6">
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">
        Add a New Restaurant
      </h1>

      <form class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Restaurant Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="Enter restaurant name"
            class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <input
            type="text"
            id="address"
            name="address"
            v-model="address"
            placeholder="Enter restaurant address"
            class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="contact" class="block text-sm font-medium text-gray-700"
            >Contact</label
          >
          <input
            type="text"
            id="contact"
            name="contact"
            v-model="contact"
            placeholder="Enter restaurant contact"
            class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          @click="addRestaurant"
          class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition duration-200"
        >
          Add New Restaurant
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import axios from "axios";

const router = useRouter();

const name = ref("");
const address = ref("");
const contact = ref("");

onMounted(() => {
  const user = localStorage.getItem("user-info");
  if (!user) {
    router.push("/sign-in");
  }
});

async function addRestaurant() {
  const result = await axios.post("http://localhost:3000/restaurants", {
    name: name.value,
    address: address.value,
    contact: contact.value,
  });
  name.value = result.data.name;
  address.value = result.data.address;
  contact.value = result.data.contact;

  if (result.status == 201) {
    router.push("/");
  }
  console.log("result", result);
}
</script>
