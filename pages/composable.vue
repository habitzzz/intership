<template>
  <NuxtLayout name="client">
    <div bg-primary>
      <h2>Penjumlahan</h2>
      <label>
        Angka 1:
        <input v-model.number="num1" type="number" />
      </label>
      <label>
        Angka 2:
        <input v-model.number="num2" type="number" />
      </label>
      <p>Hasil: {{ sum }}</p>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
const { num1, num2, sum } = useAddition();
</script>