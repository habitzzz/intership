<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">My Header</div>
      <div class="flex space-x-4">
        <NuxtLink to="/" class="text-white hover:text-gray-300">Home</NuxtLink>
        <NuxtLink to="/component" class="text-white hover:text-gray-300"
          >Component</NuxtLink
        >
        <NuxtLink to="/composable" class="text-white hover:text-gray-300"
          >Composable</NuxtLink
        >
        <NuxtLink to="/error" class="text-white hover:text-gray-300"
          >Error Page</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
  