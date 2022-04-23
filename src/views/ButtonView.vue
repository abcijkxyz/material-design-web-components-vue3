<script setup>
import { onBeforeMount, onMounted } from 'vue'
import '@material/mwc-button'
import '@material/mwc-icon'
import DemoHeader from '@/components/DemoHeader.vue'
onBeforeMount(() => {
  console.log('DOM即将挂载')
})
onMounted(() => {
  console.log('DOM挂载完毕')
  document.querySelectorAll('style[data-pre]').forEach((e) => {
    const preId = e.dataset.pre
    const pre = document.querySelector('#' + preId)
    if (pre) {
      pre.innerText = e.innerText
    }
  })
})
</script>

<template>
  <DemoHeader component="Button" package="button"></DemoHeader>

  <main>
    <h2>Standard</h2>
    <div class="demo-group wrap">
      <mwc-button label="standard"></mwc-button>
      <mwc-button label="standard" icon="code"></mwc-button>
    </div>

    <h2>Outlined</h2>
    <div class="demo-group wrap">
      <mwc-button outlined label="outlined"></mwc-button>
      <mwc-button outlined label="outlined" icon="code"></mwc-button>
    </div>

    <h2>Raised</h2>
    <div class="demo-group wrap">
      <mwc-button raised label="raised"></mwc-button>
      <mwc-button raised label="raised" icon="code"></mwc-button>
    </div>

    <h2>Unelevated</h2>
    <div class="demo-group wrap">
      <mwc-button unelevated label="unelevated"></mwc-button>
      <mwc-button unelevated label="unelevated" icon="code"></mwc-button>
    </div>

    <h2>Dense</h2>
    <div class="demo-group wrap">
      <mwc-button dense unelevated label="dense"></mwc-button>
      <mwc-button dense unelevated label="dense" icon="code"></mwc-button>
    </div>

    <h2>Trailing icon</h2>
    <div class="demo-group wrap">
      <mwc-button label="trailing icon" icon="code" trailingIcon></mwc-button>
      <mwc-button outlined label="trailing icon" icon="code" trailingIcon></mwc-button>
      <mwc-button raised label="trailing icon" icon="code" trailingIcon></mwc-button>
      <mwc-button unelevated label="trailing icon" icon="code" trailingIcon></mwc-button>
    </div>

    <h2>Disabled</h2>
    <div class="demo-group wrap">
      <mwc-button disabled label="disabled" icon="code"></mwc-button>
      <mwc-button disabled outlined label="disabled" icon="code"></mwc-button>
      <mwc-button disabled raised label="disabled" icon="code"></mwc-button>
      <mwc-button disabled unelevated label="disabled" icon="code"></mwc-button>
    </div>

    <h2>Full Width</h2>
    <div class="demo-group wrap">
      <mwc-button fullwidth outlined label="full-width"></mwc-button>
    </div>

    <h2>Styling</h2>
    <style v-is="'style'" data-pre="main-colors">
      .main-colors {
        --mdc-theme-primary: darkgreen;
        --mdc-theme-on-primary: aqua;
        --mdc-button-disabled-fill-color: darkseagreen;
        --mdc-button-disabled-ink-color: aliceblue;
      }
    </style>
    <pre id="main-colors"></pre>
    <div class="demo-group wrap main-colors">
      <mwc-button icon="code" label="standard"></mwc-button>
      <mwc-button outlined icon="code" label="outlined"></mwc-button>
      <mwc-button raised icon="code" label="raised"></mwc-button>
      <mwc-button raised icon="code" label="raised-disabled" disabled></mwc-button>
      <mwc-button unelevated icon="code" label="unelevated"></mwc-button>
      <mwc-button unelevated icon="code" label="unelevated-disabled" disabled></mwc-button>
    </div>

    <style v-is="'style'" data-pre="text">
      .text {
        --mdc-typography-button-text-transform: lowercase;
        --mdc-typography-button-letter-spacing: 4px;
      }
    </style>
    <pre id="text"></pre>
    <div class="demo-group wrap text">
      <mwc-button icon="code" label="lowerspace"></mwc-button>
      <mwc-button outlined icon="code" label="lowerspace"></mwc-button>
      <mwc-button raised icon="code" label="lowerspace"></mwc-button>
      <mwc-button unelevated icon="code" label="lowerspace"></mwc-button>
    </div>

    <style v-is="'style'" data-pre="horizontal-padding">
      .horizontal-padding {
        --mdc-button-horizontal-padding: 50px;
      }
    </style>
    <pre id="horizontal-padding"></pre>
    <div class="demo-group wrap horizontal-padding">
      <mwc-button icon="code" label="padding"></mwc-button>
      <mwc-button outlined icon="code" label="padding"></mwc-button>
      <mwc-button raised icon="code" label="padding"></mwc-button>
      <mwc-button unelevated icon="code" label="padding"></mwc-button>
    </div>

    <style v-is="'style'" data-pre="outline">
      .outline .themed {
        --mdc-theme-primary: royalblue;
        --mdc-button-disabled-ink-color: powderblue;
      }
      .outline .outline-different {
        --mdc-button-outline-color: darkgreen;
        --mdc-button-disabled-outline-color: palegreen;
        --mdc-button-disabled-ink-color: plum;
      }
      .outline .width {
        --mdc-button-outline-width: 5px;
      }
    </style>
    <pre id="outline"></pre>
    <div class="demo-group wrap outline">
      <mwc-button outlined class="themed" icon="code" label="themed"></mwc-button>
      <mwc-button outlined class="themed" disabled icon="code" label="themed"></mwc-button>
      <mwc-button outlined class="outline-different" icon="code" label="outline-different"></mwc-button>
      <mwc-button outlined class="outline-different" disabled icon="code" label="outline-different"></mwc-button>
      <mwc-button outlined class="width" icon="code" label="width"></mwc-button>
      <mwc-button outlined class="width" disabled icon="code" label="width"></mwc-button>
    </div>
  </main>
</template>

<style lang="less" scoped>
mwc-button {
  margin: 20px;
}
</style>
