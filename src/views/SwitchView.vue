<script setup>
import { onMounted } from 'vue'
import '@material/mwc-switch'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Switch" package="switch"></DemoHeader>

  <main>
    <div class="demo-group">
      <mwc-switch></mwc-switch>
      <mwc-switch checked></mwc-switch>
      <mwc-switch disabled></mwc-switch>
      <mwc-switch disabled checked></mwc-switch>
    </div>
    <div class="demo-group">
      <span class="styled demo-group-spaced">
        <mwc-switch></mwc-switch>
        <mwc-switch checked></mwc-switch>
        <mwc-switch disabled></mwc-switch>
        <mwc-switch disabled checked></mwc-switch>
      </span>
    </div>
  </main>
</template>

<style lang="less" scoped>
.styled {
  display: flex;
  height: 48px;
  background-color: #363636;

  --mdc-theme-secondary: #ff2929;
  --mdc-theme-on-surface: #adadad;
  --mdc-theme-surface: white;
}

.demo-group {
  height: 48px;
}

.styled.demo-group-spaced {
  margin: 0;
}
</style>
