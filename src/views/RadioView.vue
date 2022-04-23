<script setup>
import { onMounted } from 'vue'
import '@material/mwc-radio'
import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Radio" package="radio"></DemoHeader>

  <main>
    <mwc-radio id="a1" name="a" checked></mwc-radio>
    <mwc-radio id="a2" name="a"></mwc-radio>
    <mwc-radio id="a3" name="a" disabled></mwc-radio>
    <span class="styled">
      <mwc-radio id="b1" name="b"></mwc-radio>
      <mwc-radio id="b2" name="b" checked></mwc-radio>
      <mwc-radio id="b3" name="b" disabled></mwc-radio>
    </span>
  </main>
</template>

<style lang="less" scoped>
.styled {
  display: inline-block;
  background-color: #363636;

  --mdc-theme-secondary: #ff2929;
  --mdc-radio-unchecked-color: white;
  /* Required for unchecked focus ripple */
  --mdc-theme-on-surface: white;
  --mdc-radio-disabled-color: #adadad;
}
</style>
