<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-200 to-green-500"
  >
    <div>
      <div
        class="bg-green-50 p-8 rounded-2xl shadow-2xl w-96 border-2 border-green-300"
      >
        <h1 class="text-3xl font-extrabold mb-6 text-center text-green-700">
          Sign In
        </h1>

        <form>
          <div class="mb-5">
            <label class="block text-green-700 font-semibold mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              class="w-full p-3 border border-green-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="email"
              autocomplete="new-email"
            />
          </div>

          <div class="mb-5 relative">
            <label class="block text-green-700 font-semibold mb-2"
              >Password</label
            >

            <div class="mt-5 relative">
              <input
                placeholder="Enter your password"
                class="w-full p-3 border border-green-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                v-model="password"
                autocomplete="new-password"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              class="w-full bg-green-500 text-white p-3 rounded-xl font-bold hover:bg-green-600 transition duration-300"
              @click="sighIn"
            >
              Sign In
            </button>
          </div>
        </form>

        <div class="text-center text-sm text-green-600 mt-4">
          Don't have an account?
          <button
            class="text-green-800 font-bold hover:underline"
            @click="goToSighUp"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

async function sighIn() {
  //   alert("sighIn function is implemented yet.");
  // console.log(username.value, password.value);

  try {
    const result = await axios.get(
      `http://localhost:3000/users?email=${email.value}&password=${password.value}`
    );
    if (result.status == 200 && result.data.length > 0) {
      // alert("Sigh Up successfully...");
      localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      router.push("/");
    }
  } catch (error) {
    console.error("Error during sign In:", error);
  }
}

onMounted(() => {
  // console.log("Mounted...");
  const user = localStorage.getItem("user-info");
  if (user) {
    router.push("/");
  } else {
    router.push("/sign-in");
  }
});

function goToSighUp() {
  router.push("/sign-up");
}
</script>
