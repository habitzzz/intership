export function useAddition() {
  const num1 = ref(0);
  const num2 = ref(0);

  function add() {
    return num1.value + num2.value;
  }

  const sum = computed(() => add());

  return {
    num1,
    num2,
    sum,
  };
}