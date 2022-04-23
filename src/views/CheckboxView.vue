<script setup>
import '@material/mwc-checkbox'
import DemoHeader from '@/components/DemoHeader.vue'
</script>
<template>
  <DemoHeader component="Checkbox" package="checkbox"></DemoHeader>

  <main>
    <div class="demo-group">
      <mwc-checkbox></mwc-checkbox>
      <mwc-checkbox checked></mwc-checkbox>
      <mwc-checkbox indeterminate></mwc-checkbox>
      <mwc-checkbox disabled></mwc-checkbox>
    </div>
    <div>
      <span class="styled demo-group">
        <mwc-checkbox></mwc-checkbox>
        <mwc-checkbox checked></mwc-checkbox>
        <mwc-checkbox indeterminate></mwc-checkbox>
        <mwc-checkbox disabled></mwc-checkbox>
      </span>
    </div>
  </main>
</template>

<style lang="less" scoped>
.styled {
  background-color: #363636;
  display: flex;

  --mdc-theme-secondary: #ff2929;
  --mdc-checkbox-unchecked-color: white;
  /* Required for unchecked focus ripple */
  --mdc-theme-on-surface: white;
  --mdc-checkbox-disabled-color: #adadad;
  --mdc-checkbox-mark-color: #363636;
}

.styled.demo-group {
  display: inline-block;
}
</style>
