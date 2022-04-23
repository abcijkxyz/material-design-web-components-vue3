<script setup>
import { onMounted } from 'vue'
import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Drawer" package="drawer"></DemoHeader>
  <main>
    <h2>Standard Drawer</h2>
    <iframe src="/#/drawer_standard_no_header" frameborder="0"></iframe>
    <h2>Standard Drawer with Header</h2>
    <iframe src="/#/drawer_standard" frameborder="0"></iframe>
    <h2>Dismissible Drawer with header</h2>
    <iframe src="/#/drawer_dismissible" frameborder="0"></iframe>
    <h2>Modal Drawer with header</h2>
    <iframe src="/#/drawer_modal" frameborder="0"></iframe>
  </main>
</template>

<style lang="less" scoped>
iframe {
  margin-bottom: 36px;
  height: 300px;
  width: 100%;
}
</style>
