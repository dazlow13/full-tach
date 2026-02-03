<script setup></script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <router-link class="text-xl font-bold" to="/">Home</router-link>
        <nav class="space-x-4">
          <router-link class="text-gray-600 hover:text-black" to="/login">Login</router-link>
          <router-link class="text-gray-600 hover:text-black" to="/register">Register</router-link>
          <router-link class="text-gray-600 hover:text-black" to="/dashboard">Dashboard</router-link>
        </nav>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-10">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
