<script setup>
import { onMounted } from 'vue'
import '@material/mwc-linear-progress'
import '@material/mwc-button'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  window.toggle.onclick = function () {
    window.progress1.closed = !window.progress1.closed
  }
})
</script>

<template>
  <DemoHeader component="Linear Progress" package="linear-progress"></DemoHeader>

  <main>
    <mwc-button id="toggle" raised ripple label="Toggle"></mwc-button>
    <mwc-linear-progress id="progress1"></mwc-linear-progress>
    <h3>linear-progress: reverse</h3>
    <mwc-linear-progress reverse progress="0.4" class="demo-progress-bar"></mwc-linear-progress>
    <h3>linear-progress: determinate</h3>
    <mwc-linear-progress determinate progress="0.5" buffer="1"></mwc-linear-progress>
    <h3>linear-progress: determinate buffer</h3>
    <mwc-linear-progress determinate progress="0.3" buffer="0.7" class="demo-progress-bar"></mwc-linear-progress>
    <h3>linear-progress: determinate buffer reverse</h3>
    <mwc-linear-progress determinate reverse progress="0.2" buffer="0.6"></mwc-linear-progress>
  </main>
</template>

<style lang="less" scoped>
mwc-linear-progress {
  width: 50%;
  margin: auto;
}

.demo-progress-bar {
  --mdc-theme-primary: red;
  --mdc-linear-progress-buffer-color: orange;
  --mdc-linear-progress-buffering-dots-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffcdd2'/%3E%3C/svg%3E");
}
</style>
