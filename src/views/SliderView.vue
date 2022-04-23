<script setup>
import { onMounted } from 'vue'
import '@material/mwc-slider'
import '@material/mwc-slider/slider-range'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  Array.from(document.querySelectorAll('mwc-slider')).forEach(function (e) {
    e.addEventListener('input', function (e) {
      window.logInput.textContent = `${e.target.value}`
    })
    e.addEventListener('change', function (e) {
      window.logChange.textContent = `${e.target.value}`
    })
  })

  Array.from(document.querySelectorAll('mwc-slider-range')).forEach(function (e) {
    e.addEventListener('input', function (e) {
      window.logInput.textContent = `start: ${e.target.valueStart}, end: ${e.target.valueEnd}`
    })
    e.addEventListener('change', function (e) {
      window.logChange.textContent = `start: ${e.target.valueStart}, end: ${e.target.valueEnd}`
    })
  })
})
</script>

<template>
  <DemoHeader component="Slider" package="slider"></DemoHeader>

  <main>
    <h2>Single Handle</h2>
    <h3>Continuous</h3>
    <div class="demo-container">
      <mwc-slider></mwc-slider>
    </div>

    <h3>Discrete</h3>
    <div class="demo-container demo-colory">
      <mwc-slider discrete withTickMarks max="50" value="10" step="5"></mwc-slider>
    </div>

    <h3>Disabled</h3>
    <div class="demo-container">
      <mwc-slider disabled></mwc-slider>
    </div>

    <h2>Ranged</h2>
    <h3>Continuous</h3>
    <div class="demo-container">
      <mwc-slider-range></mwc-slider-range>
    </div>

    <h3>Discrete</h3>
    <div class="demo-container demo-colory">
      <mwc-slider-range discrete withTickMarks min="-12" max="12" valueStart="-6" valueEnd="9" step="1.5"> </mwc-slider-range>
    </div>

    <h3>Disabled</h3>
    <div class="demo-container">
      <mwc-slider-range disabled></mwc-slider-range>
    </div>

    <div>Value from input: <span id="logInput"></span></div>
    <div>Value from change: <span id="logChange"></span></div>
  </main>
</template>

<style lang="less" scoped>
.demo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-container > * {
  width: 50%;
}

.demo-colory {
  --mdc-theme-secondary: orange;
  --mdc-theme-text-primary-on-dark: green;
}
</style>
