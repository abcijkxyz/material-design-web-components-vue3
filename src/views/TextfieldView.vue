<script setup>
import { onMounted } from 'vue'
import '@material/mwc-textfield'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Textfield" package="textfield"></DemoHeader>
  <main>
    <h4>Filled</h4>
    <div class="demo-group-spaced">
      <mwc-textfield label="Standard"></mwc-textfield>
      <mwc-textfield label="Standard" icon="event"></mwc-textfield>
      <mwc-textfield label="Standard" iconTrailing="delete"></mwc-textfield>
    </div>

    <h4>Shaped Filled</h4>
    <div class="demo-group-spaced shaped-filled">
      <mwc-textfield label="Standard"></mwc-textfield>
      <mwc-textfield label="Standard" icon="event"></mwc-textfield>
      <mwc-textfield class="color" label="Standard" iconTrailing="delete"></mwc-textfield>
    </div>

    <h4>Outlined</h4>
    <div class="demo-group-spaced">
      <mwc-textfield outlined label="Standard"></mwc-textfield>
      <mwc-textfield outlined label="Standard" icon="event"></mwc-textfield>
      <mwc-textfield outlined label="Standard" iconTrailing="delete"></mwc-textfield>
    </div>

    <h4>Shaped Outlined</h4>
    <div class="demo-group-spaced shaped-outlined">
      <mwc-textfield outlined label="Email" type="email"></mwc-textfield>
      <mwc-textfield outlined label="Standard" icon="event"></mwc-textfield>
      <mwc-textfield outlined label="Standard" iconTrailing="delete"></mwc-textfield>
    </div>

    <h4>Text Field without label</h4>
    <div class="demo-group-spaced">
      <mwc-textfield helper="Helper Text"></mwc-textfield>
      <mwc-textfield outlined helper="Helper Text"></mwc-textfield>
      <mwc-textfield outlined helper="Helper Text" class="shaped-outlined"></mwc-textfield>
    </div>

    <h4>Text Field with Character Counter</h4>
    <div class="demo-group-spaced">
      <mwc-textfield label="Standard" helper="Helper Text" helperPersistent maxlength="18" charCounter></mwc-textfield>
      <mwc-textfield outlined label="Standard" helper="Helper Text" helperPersistent maxlength="18" charCounter></mwc-textfield>
      <mwc-textfield outlined label="Standard" helper="Helper Text" helperPersistent maxlength="18" charCounter class="shaped-outlined"></mwc-textfield>
    </div>

    <h4>End-aligned</h4>
    <div class="demo-group-spaced">
      <mwc-textfield label="Standard" value="End-aligned" endaligned></mwc-textfield>
      <mwc-textfield outlined label="Standard" value="End-aligned" endaligned></mwc-textfield>
      <mwc-textfield outlined label="Standard" value="End-aligned" endaligned class="shaped-outlined"></mwc-textfield>
    </div>

    <h4>Full Width</h4>
    <mwc-textfield fullwidth placeholder="Fullwidth" helper="Helper Text" helperpersistent></mwc-textfield>
  </main>
</template>

<style lang="less" scoped>
mwc-textfield {
  min-width: 240px;
}
.shaped-filled {
  --mdc-text-field-filled-border-radius: 32px 32px 0 0;
}
.shaped-outlined {
  --mdc-notched-outline-leading-width: 28px;
  --mdc-notched-outline-leading-border-radius: 28px 0 0 28px;
  --mdc-notched-outline-trailing-border-radius: 0 28px 28px 0;
}
mwc-textarea {
  min-width: 250px;
}

.demo-group-spaced {
  flex-wrap: wrap;
}

.demo-group-spaced > *,
[fullwidth] {
  margin-top: 8px;
}
</style>
