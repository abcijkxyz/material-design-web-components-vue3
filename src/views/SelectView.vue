<script setup>
import { onMounted } from 'vue'
import '@material/mwc-select'
import '@material/mwc-list/mwc-list-item'
import '@material/mwc-button'
import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  window.filled.addEventListener('change', function () {
    window.filledValue.innerText = window.filled.value
  })

  window.outlined.addEventListener('change', function () {
    window.outlinedValue.innerText = window.outlined.value
  })

  window.preselected.addEventListener('change', function () {
    window.preselectedValue.innerText = window.preselected.value
  })

  window.reqFilled.addEventListener('change', function () {
    window.reqFilledValue.innerText = window.reqFilled.value
    window.reqFilledValid.innerText = window.reqFilled.validity.valid
  })

  window.reqOutlined.addEventListener('change', function () {
    window.reqOutlinedValue.innerText = window.reqOutlined.value
    window.reqOutlinedValid.innerText = window.reqOutlined.validity.valid
  })

  window.disabledOptions.addEventListener('change', function () {
    window.disabledOptionsValue.innerText = window.disabledOptions.value
  })

  window.naturalButton.addEventListener('click', function () {
    window.naturalOptions.naturalMenuWidth = !window.naturalOptions.naturalMenuWidth
    window.naturalValue.innerText = window.naturalOptions.naturalMenuWidth
  })

  window.shortNaturalButton.addEventListener('click', function () {
    window.shortNaturalOptions.naturalMenuWidth = !window.shortNaturalOptions.naturalMenuWidth
    window.shortNaturalValue.innerText = window.shortNaturalOptions.naturalMenuWidth
  })

  window.fullwidthButton.addEventListener('click', function () {
    window.fullwidthOptions.fullwidth = !window.fullwidthOptions.fullwidth
    window.fullwidthValue.innerText = window.fullwidthOptions.fullwidth
  })
})
</script>

<template>
  <DemoHeader component="Select" package="select"></DemoHeader>
  <div class="select-body">
    <main>
      <h2>Filled</h2>
      <mwc-select label="filled" id="filled">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Option 1</mwc-list-item>
        <mwc-list-item value="2">Option 2</mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>
      <div>Value: <span id="filledValue"></span></div>

      <h2>Outlined</h2>
      <mwc-select outlined label="outlined" id="outlined">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Option 1</mwc-list-item>
        <mwc-list-item value="2">Option 2</mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>
      <div>Value: <span id="outlinedValue"></span></div>

      <h2>Preselected</h2>
      <mwc-select label="preselected" id="preselected">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Option 1</mwc-list-item>
        <mwc-list-item value="2" selected>Option 2</mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>
      <div>Value: <span id="preselectedValue"></span></div>

      <h2>Icon</h2>
      <mwc-select label="has icon" icon="event">
        <mwc-list-item graphic="icon" value="1">Option 1</mwc-list-item>
        <mwc-list-item graphic="icon" value="2">Option 2</mwc-list-item>
        <mwc-list-item graphic="icon" value="3">Option 3</mwc-list-item>
      </mwc-select>

      <h2>Required</h2>
      <mwc-select required label="required filled" id="reqFilled">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Option 1</mwc-list-item>
        <mwc-list-item value="2">Option 2</mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>
      <div>Value: <span id="reqFilledValue"></span></div>
      <div>Valid: <span id="reqFilledValid"></span></div>

      <mwc-select outlined required label="required outlined" id="reqOutlined">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Option 1</mwc-list-item>
        <mwc-list-item value="2">Option 2</mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>
      <div>Value: <span id="reqOutlinedValue"></span></div>
      <div>Valid: <span id="reqOutlinedValid"></span></div>

      <h2>Disabled</h2>
      <mwc-select disabled label="disabled">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item disabled value="1">Option 1</mwc-list-item>
        <mwc-list-item value="2">Option 2</mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>

      <h2>Disabled Options</h2>
      <mwc-select label="disabled" id="disabledOptions">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Option 1</mwc-list-item>
        <mwc-list-item disabled value="2"><div>Option 2</div></mwc-list-item>
        <mwc-list-item value="3">Option 3</mwc-list-item>
      </mwc-select>
      <div>Value: <span id="disabledOptionsValue"></span></div>

      <h2>Natural Menu Width</h2>

      <style v-is="'style'">
        #naturalOptions {
          max-width: 200px;
        }
      </style>
      <mwc-select label="natural width (long)" id="naturalOptions">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Some Really Really Really long text</mwc-list-item>
        <mwc-list-item value="2">Some Really Really Really long text</mwc-list-item>
        <mwc-list-item value="3">Some Really Really Really long text</mwc-list-item>
      </mwc-select>
      <div>
        <mwc-button raised label="toggle naturalMenuWidth" id="naturalButton"> </mwc-button>
      </div>
      <div>
        <pre>mwc-select.naturalMenuWidth</pre>
        value:
        <span id="naturalValue">false</span>
      </div>

      <mwc-select label="natural width (short)" id="shortNaturalOptions">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="1">Short text</mwc-list-item>
        <mwc-list-item value="2">Short text</mwc-list-item>
        <mwc-list-item value="3">Short text</mwc-list-item>
      </mwc-select>
      <div>
        <mwc-button raised label="toggle naturalMenuWidth" id="shortNaturalButton"> </mwc-button>
      </div>
      <div>
        <pre>mwc-select.naturalMenuWidth</pre>
        value:
        <span id="shortNaturalValue">false</span>
      </div>

      <div id="fullwidthParent">
        <mwc-select label="fullwidth" id="fullwidthOptions">
          <mwc-list-item></mwc-list-item>
          <mwc-list-item value="1">Short text</mwc-list-item>
          <mwc-list-item value="2">Short text</mwc-list-item>
          <mwc-list-item value="3">Short text</mwc-list-item>
        </mwc-select>
      </div>
      <div>
        <mwc-button raised label="toggle fullwidth" id="fullwidthButton"> </mwc-button>
      </div>
      <div>
        <pre>mwc-select.fullwidth</pre>
        value:
        <span id="fullwidthValue">false</span>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.select-body {
  min-height: calc(100vh - 4em);
}

.abs {
  position: absolute;
  top: calc(100vh - 128px);
  right: calc(100vw - 100% + 16px);
}

[slot='graphic'].material-icons {
  background-color: gray;
  color: white;
}

mwc-select ~ div,
div ~ mwc-select {
  margin-top: 8px;
}

#fullwidthParent {
  border: 1px solid black;
  width: 70%;
}

#fullwidthOptions {
  width: 100%;
}
</style>
