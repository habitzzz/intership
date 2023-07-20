<template>
  <NuxtLayout name="client">
    <div>
      <FooButton @click="handleClick">Klik Saya</FooButton>
      <FooButton type="primary" @click="handlePrimaryClick"
        >Tombol Utama</FooButton
      >
      <FooButton type="secondary" disabled="true"
        >Tombol Dinonaktifkan</FooButton
      >
    </div>
  </NuxtLayout>
</template>

<script setup>
function handleClick() {
  alert("Tombol diklik!");
}
function handlePrimaryClick() {
  alert("Tombol Utama diklik!");
}
</script>