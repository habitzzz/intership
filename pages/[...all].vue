<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="bg-slate-800 h-screen flex flex-col items-center justify-center text-white">
    <div class="mt-15 intro-y">Not found</div>
    <div mt-10>
      <button text-lg px-15 btn bg-slate-600 animate-fade-in @click="router.back()">
        Kembali
      </button>
    </div>
  </main>
</template>