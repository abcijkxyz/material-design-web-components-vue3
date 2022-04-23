<script setup>
import { onMounted } from 'vue'
import '@material/mwc-snackbar'
import '@material/mwc-button'
import '@material/mwc-textfield'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  window.textfield.addEventListener('change', () => {
    if (!window.textfield.validity.valid) {
      return
    }

    const newDuration = Number(window.textfield.value)
    let snackbarLabel = `Can't send photo. Retry in ${newDuration / 1000} seconds.`

    if (newDuration === -1) {
      snackbarLabel = "Can't  send photo. Please retry."
    }

    window.snack.timeoutMs = newDuration
    window.snack.labelText = snackbarLabel
  })

  window.textfield.validityTransform = (valueStr, validity) => {
    const value = Number(valueStr)
    if (value > 10000) {
      validity.rangeOverflow = true
      validity.valid = false
    } else if (value < 4000 && value !== -1) {
      validity.rangeUnderflow = true
      validity.valid = false
    }

    return validity
  }

  window.snack1.onclick = function () {
    window.snack.stacked = false
    window.snack.leading = false
    window.snack.open = true
  }

  window.snack2.onclick = function () {
    window.snack.stacked = false
    window.snack.leading = true
    // you can also use the show method
    window.snack.show()
  }

  window.snack3.onclick = function () {
    window.snack.stacked = true
    window.snack.leading = false
    window.snack.open = true
  }
})
</script>

<template>
  <DemoHeader component="Snackbar" package="snackbar"></DemoHeader>

  <main>
    <div class="demo-group">
      <mwc-button id="snack1" raised ripple label="DEFAULT"></mwc-button>
      <mwc-button id="snack2" raised ripple label="LEADING"></mwc-button>
      <mwc-button id="snack3" raised ripple label="STACKED"></mwc-button>
      <mwc-textfield id="textfield" label="snackbar timeout (ms)" helper="4000ms - 10000ms or -1" type="number" value="5000"> </mwc-textfield>
    </div>

    <mwc-snackbar id="snack" labelText="Can't send photo. Retry in 5 seconds.">
      <mwc-button id="actionButton" slot="action">RETRY</mwc-button>
      <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
    </mwc-snackbar>
  </main>
</template>

<style lang="less" scoped>
.demo-group {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.demo-group > * {
  margin: 4px 0;
}
</style>
