<template>
  <NuxtLayout name="cms">
    <template #header><TheHeader /></template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <h1>Hello World !</h1>
      <i class="i-twemoji:world-map"></i>
      <i class="i-solar:accumulator-bold-duotone w-20 h-20"></i>
      <button btn bg-primary w-fit class="text-red-500 px-25">tombol</button>
    </div>
    <template #footer><TheFooter /></template>
  </NuxtLayout>
</template>

<script setup>
</script>

<style>
</style>