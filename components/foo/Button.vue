<template>
  <button :class="buttonClass" @click="onClick">
    <slot />
    {{ type }}
  </button>
</template>
  
<script setup>
const { type, disabled } = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => [
  "px-4 py-2 border rounded",
  type === "default"
    ? "border-gray-400 text-gray-600"
    : type === "primary"
    ? "bg-blue-500 text-white"
    : "bg-gray-600 text-white",
  disabled && "opacity-50 cursor-not-allowed",
]);
</script>
  