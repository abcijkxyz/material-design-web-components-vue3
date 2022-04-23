<script setup>
import { onMounted } from 'vue'
import '@material/mwc-circular-progress'
import '@material/mwc-circular-progress-four-color'
import '@material/mwc-button'
import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  window.toggle.onclick = function () {
    window.progress1.closed = !window.progress1.closed
  }
})
</script>
<template>
  <DemoHeader component="Circular Progress" package="circular-progress"></DemoHeader>

  <main>
    <mwc-button id="toggle" raised ripple label="Toggle"></mwc-button>
    <mwc-circular-progress progress="0.4" id="progress1"></mwc-circular-progress>
    <h3>circular-progress: determinate</h3>
    <mwc-circular-progress progress="0.7"></mwc-circular-progress>
    <h3>circular-progress: indeterminate</h3>
    <mwc-circular-progress indeterminate></mwc-circular-progress>
    <h3>circular-progress: custom color</h3>
    <mwc-circular-progress indeterminate class="demo-progress-bar"></mwc-circular-progress>
    <h3>circular-progress: custom four color</h3>
    <mwc-circular-progress-four-color indeterminate class="demo-progress-bar-four-color"></mwc-circular-progress-four-color>
  </main>
</template>
<style lang="less" scoped>
.demo-progress-bar {
  --mdc-theme-primary: red;
}
.demo-progress-bar-four-color {
  --mdc-circular-progress-bar-color-1: #2196f3;
  --mdc-circular-progress-bar-color-2: #e91e63;
  --mdc-circular-progress-bar-color-3: #ffc107;
  --mdc-circular-progress-bar-color-4: #03dac5;
}
</style>
