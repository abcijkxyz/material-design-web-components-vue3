<template>
  <mwc-top-app-bar-fixed>
    <a href="./" slot="navigationIcon">
      <mwc-icon-button class="white" icon="arrow_back"></mwc-icon-button>
    </a>
    <span slot="title">{{ component }}</span>
    <a :href="'https://github.com/material-components/material-components-web-components/tree/master/demos/' + package + '/index.html'" slot="actionItems" target="_blank">
      <mwc-button outlined label="View Source" class="white"></mwc-button>
    </a>
  </mwc-top-app-bar-fixed>
</template>

<script setup>
import '@material/mwc-top-app-bar-fixed'
import '@material/mwc-icon-button'
import '@material/mwc-button'

defineProps({
  component: String,
  package: String,
})
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
[slot='title'] {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.4px;
}
.white {
  --mdc-theme-primary: white;
  --mdc-button-outline-color: white;
  color: white;
}
</style>
