<template>
  <NuxtLayout name="client">
    <template #header>
      <TheHeader />
    </template>
    <div class="grid grid-cols-2">
      <div bg-primary>
        <h2>Penjumlahan Composables</h2>
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
      <div bg-secondary>
        <h2>Penjumlahan NON Composables</h2>
        <label>
          Angka 1:
          <input v-model.number="angka1" type="number" />
        </label>
        <label>
          Angka 2:
          <input v-model.number="angka2" type="number" />
        </label>
        <p>Hasil: {{ angka1 + angka2 }}</p>
      </div>      
    </div>
  </NuxtLayout>
</template>
   
<script setup>
const { num1, num2, sum } = useAddition();

const angka1 = ref(0);
const angka2 = ref(0);
</script>