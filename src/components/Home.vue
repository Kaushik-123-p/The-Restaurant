<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
    <Header />

    <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 class="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Hello {{ userName }}, Welcome to Our Restaurant
      </h1>

      <div class="overflow-x-auto">
        <table
          class="min-w-full border border-gray-200 divide-y divide-gray-200"
        >
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">
                ID
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Address
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Contact
              </th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr
              v-for="item in restaurants"
              :key="item.id"
              class="hover:bg-gray-50"
            >
              <td class="px-4 py-2 text-sm text-gray-700">{{ item.id }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">{{ item.name }}</td>
              <td class="px-4 py-2 text-sm text-gray-700">
                {{ item.address }}
              </td>
              <td class="px-4 py-2 text-sm text-gray-700">
                {{ item.contact }}
              </td>
              <td>
                <router-link
                  :to="'/update-restaurant/' + item.id"
                  class="px-4 py-2 text-sm text-gray-700"
                  >update</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import axios from "axios";

const router = useRouter();

const userName = ref("");
const restaurants = ref([]);

onMounted(async () => {
  const user = localStorage.getItem("user-info");
  if (!user) {
    router.push("/sign-in");
  } else {
    const parsedUser = JSON.parse(user);
    userName.value = parsedUser.name || "User";
  }

  try {
    const result = await axios.get("http://localhost:3000/restaurants");
    restaurants.value = result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
