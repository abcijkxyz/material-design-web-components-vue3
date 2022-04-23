<script setup>
import { onMounted } from 'vue'
import '@material/mwc-tab-bar'
import '@material/mwc-tab'

onMounted(() => {
  //
})
</script>

<template>
  <main dir="rtl">
    <h3>RTL</h3>
    <mwc-tab-bar>
      <mwc-tab label="one"></mwc-tab>
      <mwc-tab label="two"></mwc-tab>
      <mwc-tab label="three"></mwc-tab>
    </mwc-tab-bar>

    <h3>RTL With Icons</h3>
    <mwc-tab-bar activeIndex="2">
      <mwc-tab label="one" icon="accessibility"></mwc-tab>
      <mwc-tab label="two" icon="exit_to_app"></mwc-tab>
      <mwc-tab label="three" icon="camera"></mwc-tab>
    </mwc-tab-bar>

    <h3>RTL Scrolling</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" icon="laptop" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="two" icon="laptop_chrome" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="three" icon="laptop_mac" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="four" icon="laptop_windows" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="five" icon="phone_android" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="six" icon="phone_iphone" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="seven" icon="smartphone" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="eight" icon="tablet" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="nine" icon="tablet_android" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="ten" icon="tablet_mac" stacked isMinWidthIndicator></mwc-tab>
    </mwc-tab-bar>
  </main>
</template>

<style lang="less" scoped>
main {
  margin-top: 0;
}
</style>
