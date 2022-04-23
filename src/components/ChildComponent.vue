<script setup>
defineProps({
  context: String,
})
</script>

<template>
  <p>
    <button>Styled Button {{ context }}</button>
  </p>
</template>

<style scoped>
button {
  background-color: red;
  color: white;
}
</style>
