<script setup>
import { onMounted } from 'vue'
import '@material/mwc-icon'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Icon" package="icon"></DemoHeader>
  <main>
    <div class="demo-group">
      <mwc-icon>sentiment_very_dissatisfied</mwc-icon>
      <mwc-icon>sentiment_dissatisfied</mwc-icon>
      <mwc-icon>sentiment_neutral</mwc-icon>
      <mwc-icon>sentiment_satisfied</mwc-icon>
      <mwc-icon>sentiment_very_satisfied</mwc-icon>
    </div>

    <h4>color and size</h4>
    <div class="demo-group color-size">
      <mwc-icon>all_out</mwc-icon>
      <mwc-icon>accessibility</mwc-icon>
      <mwc-icon>exit_to_app</mwc-icon>
      <mwc-icon>camera</mwc-icon>
    </div>
  </main>
</template>

<style lang="less" scoped>
.color-size {
  color: tomato;
  --mdc-icon-size: 4em;
}
</style>
