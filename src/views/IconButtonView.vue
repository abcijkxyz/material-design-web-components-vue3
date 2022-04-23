<script setup>
import { onMounted } from 'vue'
import '@material/mwc-icon-button'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Icon Button" package="icon-button"></DemoHeader>
  <main>
    <mwc-icon-button icon="code"></mwc-icon-button>
    <mwc-icon-button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </mwc-icon-button>
    <mwc-icon-button icon="code" disabled></mwc-icon-button>
    <mwc-icon-button icon="code" class="color"></mwc-icon-button>
  </main>
</template>

<style lang="less" scoped>
mwc-icon-button {
  padding: 20px;
}
.color {
  color: tomato;
}
</style>
