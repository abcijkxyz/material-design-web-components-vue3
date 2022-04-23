<script setup>
import { onMounted } from 'vue'

import '@material/mwc-textarea'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Textarea" package="textarea"></DemoHeader>

  <main>
    <h4>Textarea</h4>
    <div class="demo-group-spaced">
      <mwc-textarea label="Standard"></mwc-textarea>
      <mwc-textarea outlined label="Standard"></mwc-textarea>
    </div>

    <h4>Textarea with Character Counter</h4>
    <div class="demo-group-spaced">
      <mwc-textarea label="Standard" maxlength="18" charCounter></mwc-textarea>
      <mwc-textarea outlined label="Standard" maxlength="18" charCounter></mwc-textarea>
    </div>

    <h4>Textarea with Helper Text</h4>
    <div class="demo-group-spaced">
      <mwc-textarea label="Standard" helper="Helper Text" helperPersistent></mwc-textarea>
      <mwc-textarea outlined label="Standard" helper="Helper Text" helperPersistent></mwc-textarea>
    </div>

    <h4>End-aligned</h4>
    <div class="demo-group-spaced">
      <mwc-textarea label="Standard" value="End-aligned" endaligned></mwc-textarea>
      <mwc-textarea outlined label="Standard" value="End-aligned" endaligned></mwc-textarea>
    </div>

    <h4>Full Width Textarea</h4>
    <mwc-textarea fullwidth placeholder="Full width" helper="Helper Text" helperpersistent></mwc-textarea>
    <mwc-textarea outlined fullwidth placeholder="Full width" helper="Helper Text" helperpersistent></mwc-textarea>
  </main>
</template>

<style lang="less" scoped>
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
