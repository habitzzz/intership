export function useAddition() {
  const num1 = ref(0);
  const num2 = ref(0);
  

  const sum = computed(() => num1.value + num2.value);

  return {
    num1,
    num2,
    sum,
  };
}
