<script setup>
import { onMounted } from 'vue'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Top App Bar" package="top-app-bar"></DemoHeader>

  <main>
    <div>
      <iframe src="/#/top-app-bar_iframe"></iframe>
    </div>
  </main>
</template>

<style lang="less" scoped>
iframe {
  display: block;
  border-width: 0;
  width: 100%;
  height: 400px;
}
</style>
