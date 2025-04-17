<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <h1 class="text-5xl font-bold text-gray-800 mb-4">
      404 - Page Not Found
    </h1>

    <p class="text-lg text-gray-600 mb-6">
      The page you are looking for doesn't exist.
    </p>

    <router-link
      to="/"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      Go Home
    </router-link>
  </div>
</template>
