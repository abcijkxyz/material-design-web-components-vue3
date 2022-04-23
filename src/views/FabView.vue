<script setup>
import { onMounted } from 'vue'
import '@material/mwc-fab'
import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="FAB" package="fab"></DemoHeader>

  <main>
    <mwc-fab icon="edit"></mwc-fab>
    <mwc-fab icon="add" mini></mwc-fab>
    <mwc-fab icon="shopping_cart" extended label="Add To Cart"></mwc-fab>
    <mwc-fab icon="share" class="blackAndWhite"></mwc-fab>
  </main>
</template>

<style lang="less" scoped>
mwc-fab {
  margin-right: 50px;
}
.blackAndWhite {
  --mdc-theme-on-secondary: black;
  --mdc-theme-secondary: white;
}
</style>
