<script setup>
import { onMounted } from 'vue'
import '@material/mwc-formfield'
import '@material/mwc-checkbox'
import '@material/mwc-radio'
import '@material/mwc-switch'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Formfield" package="formfield"></DemoHeader>
  <main>
    <mwc-formfield label="This is a checkbox.">
      <mwc-checkbox></mwc-checkbox>
    </mwc-formfield>

    <h4>Align End</h4>
    <mwc-formfield alignEnd label="This is a checkbox.">
      <mwc-checkbox></mwc-checkbox>
    </mwc-formfield>

    <h4>Native Element</h4>
    <mwc-formfield alignEnd label="Enter a date.">
      <input type="date" />
    </mwc-formfield>

    <h4>Switch</h4>
    <mwc-formfield label="This is a switch.">
      <mwc-switch></mwc-switch>
    </mwc-formfield>

    <h4>Radio Button</h4>
    <mwc-formfield label="This is a radio.">
      <mwc-radio id="one" name="a"></mwc-radio>
    </mwc-formfield>
    <mwc-formfield label="This is a radio.">
      <mwc-radio id="two" name="a" checked></mwc-radio>
    </mwc-formfield>
    <mwc-formfield label="This is a radio.">
      <mwc-radio id="three" name="a"></mwc-radio>
    </mwc-formfield>
  </main>
</template>

<style lang="less" scoped>
//
</style>
