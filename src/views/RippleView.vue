<script setup>
import { onMounted } from 'vue'
import '@material/mwc-ripple/mwc-ripple'
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  const ripples = Array.from(document.querySelectorAll('mwc-ripple:not(#customControls)'))

  // note: you can also use the functions directly on the ripple, but ripple
  // handlers is a useful structure for declaratively controlling ripple in lit.
  // See implementation for mwc-button-base.ts
  ripples.forEach((ripple) => {
    // argument must return thenable promiselike (see @queryAsync in LitElement)
    // Best practice for first load would be to not render the mwc-ripple until it
    // is needed which is typically on user interaction.
    const rh = new RippleHandlers(async () => ripple)
    const parent = ripple.parentNode
    parent.addEventListener('mouseenter', rh.startHover)
    parent.addEventListener('mouseleave', rh.endHover)
    parent.addEventListener('mousedown', (e) => {
      const onMouseUp = () => {
        window.removeEventListener('mouseup', onMouseUp)
        rh.endPress()
      }

      window.addEventListener('mouseup', onMouseUp)
      rh.startPress(e)
    })
    parent.addEventListener('touchstart', (e) => {
      const onTouchEnd = () => {
        window.removeEventListener('touchend', onTouchEnd)
        rh.endPress()
      }

      window.addEventListener('touchend', onTouchEnd)
      rh.startPress(e)
    })
    parent.addEventListener('focus', rh.startFocus)
    parent.addEventListener('blur', rh.endFocus)
  })

  // Ripple controls can be fine tuned:
  // e.g. do not ripple when interacting with input
  const rh = new RippleHandlers(async () => window.customControls)
  const parent = window.customControls.parentNode
  const input = window.customControlsInput

  let isParentHover = false
  let isInputHover = false

  input.addEventListener('mouseenter', () => {
    isInputHover = true
    rh.endHover()
  })
  input.addEventListener('mouseleave', () => {
    isInputHover = false
    if (isParentHover) {
      rh.startHover()
    }
  })
  parent.addEventListener('mouseenter', () => {
    isParentHover = true

    if (isParentHover && !isInputHover) {
      rh.startHover()
    }
  })
  parent.addEventListener('mouseleave', () => {
    isParentHover = false

    rh.endHover()
  })
  parent.addEventListener('mousedown', (e) => {
    const onMouseUp = () => {
      window.removeEventListener('mouseup', onMouseUp)
      rh.endPress()
    }

    window.addEventListener('mouseup', onMouseUp)
    if (e.target !== input) {
      rh.startPress(e)
    }
  })
  parent.addEventListener('touchstart', (e) => {
    const onTouchEnd = () => {
      window.removeEventListener('touchend', onTouchEnd)
      rh.endPress()
    }

    window.addEventListener('touchend', onTouchEnd)
    if (e.target !== input) {
      rh.startPress(e)
    }
  })
  parent.addEventListener('focus', rh.startFocus)
  parent.addEventListener('blur', rh.endFocus)
})
</script>

<template>
  <DemoHeader component="Ripple" package="ripple"></DemoHeader>
  <main>
    <div class="demo-container">
      <div class="demo-box" tabindex="0">Primary<mwc-ripple primary></mwc-ripple></div>
      <div class="demo-box" tabindex="0">Accent<mwc-ripple accent></mwc-ripple></div>
      <div class="demo-box" tabindex="0">
        <div>Custom Controls</div>
        <input id="customControlsInput" placeholder="Say something..." />
        <mwc-ripple id="customControls"></mwc-ripple>
      </div>
      <div class="demo-box" tabindex="0" id="unbounded">Unbounded<mwc-ripple unbounded></mwc-ripple></div>
    </div>
  </main>
</template>

<style lang="less" scoped>
.demo-box {
  min-width: 128px;
  min-height: 128px;
  border: 1px solid gray;
  display: inline-flex;
  position: relative;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 8px;
}

.demo-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  user-select: none;
}

.demo-container > * {
  margin: 16px;
}

#unbounded {
  min-height: 64px;
}
</style>
