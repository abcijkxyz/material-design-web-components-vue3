<script setup>
import { onMounted } from 'vue'
import '@material/mwc-icon'
import '@material/mwc-icon-button-toggle'
import '@material/mwc-ripple'
import '@material/mwc-button'
import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Card" package="card"></DemoHeader>

  <div class="presentCard card-body">
    <div class="mdc-card">
      <div class="mdc-card__primary-action">
        <div class="mdc-card__media mdc-card__media--16-9 my-media"></div>
        <div class="content">
          <h2 class="mdc-typography--title">Our Changing Planet</h2>
          <h3 class="mdc-typography--subheading1 subtext">by Kurt Wagner</h3>
          <div class="mdc-typography--body1 subtext">Visit ten places on our planet that are undergoing the biggest changes today.</div>
        </div>
        <mdc-ripple></mdc-ripple>
      </div>
      <!-- ... content ... -->
      <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <mwc-button dense class="mdc-card__action--button">Read</mwc-button>
          <mwc-button dense class="mdc-card__action--button">Save</mwc-button>
        </div>
        <div class="mdc-card__action-icons">
          <mwc-icon-button-toggle title="Share" icon="share"></mwc-icon-button-toggle>
          <mwc-icon-button-toggle title="More options" icon="more_vert"></mwc-icon-button-toggle>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0, 0, 0, 0.05);
}

.presentCard {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.content {
  padding: 8px;
  background-color: tomato;
}

.rounded {
  border-radius: 8px;
  overflow: hidden;
}

:host {
  display: inline-block;
}

.mdc-card {
  max-width: 350px;
}

.my-media {
  background-image: url(/static/images/16-9.jpg);
}

.content {
  padding: 1rem;
}

.subtext {
  color: rgba(0, 0, 0, 0.54);
}
</style>
