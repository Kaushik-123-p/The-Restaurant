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
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Email address"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autocomplete="off"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Contact Number"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autocomplete="off"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Password (8-16 characters)"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autocomplete="new-password"
          />
        </div>

        <div class="my-4">
          <!-- <p class="text-center font-medium text-sm text-red-500">
            Validation message here
          </p> -->
        </div>

        <div>
          <button
            type="button"
            class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
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
// No functionality here as requested
</script>
