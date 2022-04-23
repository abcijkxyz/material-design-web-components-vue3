<script setup>
import { onMounted } from 'vue'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Elevation Overlay" package="elevation-overlay"></DemoHeader>
  <div class="elevation-body"></div>
</template>

<style lang="less" scoped>
.elevation-body {
  min-height: calc(100vh - 4em);
}
:host([elevation='0']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 0;
}
:host([elevation='1']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 5%;
}
:host([elevation='2']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 7%;
}
:host([elevation='3']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 8%;
}
:host([elevation='4']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 9%;
}
:host([elevation='6']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 11%;
}
:host([elevation='8']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 12%;
}
:host([elevation='12']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 14%;
}
:host([elevation='16']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 15%;
}
:host([elevation='24']) .overlay-wrapper {
  --mdc-elevation-overlay-opacity: 16%;
}

:host {
  background-color: #212121;
  display: inline-flex;
  padding: 8px;
  min-width: 200px;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  color: #eeeeee;
  flex-direction: column;
  box-sizing: border-box;
}

.controls {
  margin-top: 8px;
}

.overlay-wrapper {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.24);
}
</style>
