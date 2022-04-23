<script setup>
import { onMounted } from 'vue'
import '@material/mwc-tab-bar'
import '@material/mwc-tab'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  //
})
</script>

<template>
  <DemoHeader component="Tabs" package="tabs"></DemoHeader>

  <main>
    <mwc-tab-bar>
      <mwc-tab label="one"></mwc-tab>
      <mwc-tab label="two"></mwc-tab>
      <mwc-tab label="three"></mwc-tab>
    </mwc-tab-bar>

    <h3>Fading indicator</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" isFadingIndicator></mwc-tab>
      <mwc-tab label="two" isFadingIndicator></mwc-tab>
      <mwc-tab label="three" isFadingIndicator></mwc-tab>
    </mwc-tab-bar>

    <h3>Min Width Tab</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" minWidth></mwc-tab>
      <mwc-tab label="two" minWidth></mwc-tab>
      <mwc-tab label="three" minWidth></mwc-tab>
    </mwc-tab-bar>

    <h3>Min Width Indicator</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" isMinWidthIndicator></mwc-tab>
      <mwc-tab label="two" isMinWidthIndicator></mwc-tab>
      <mwc-tab label="three" isMinWidthIndicator></mwc-tab>
    </mwc-tab-bar>

    <h3>Min Width Tab - Min Width Indicator</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" minWidth isMinWidthIndicator></mwc-tab>
      <mwc-tab label="two" minWidth isMinWidthIndicator></mwc-tab>
      <mwc-tab label="three" minWidth isMinWidthIndicator></mwc-tab>
    </mwc-tab-bar>

    <h3>With Icons</h3>
    <mwc-tab-bar activeIndex="2">
      <mwc-tab label="one" icon="accessibility"></mwc-tab>
      <mwc-tab label="two" icon="exit_to_app"></mwc-tab>
      <mwc-tab label="three" icon="camera"></mwc-tab>
    </mwc-tab-bar>

    <h3>Only Icons</h3>
    <mwc-tab-bar activeIndex="2">
      <mwc-tab icon="accessibility"></mwc-tab>
      <mwc-tab icon="exit_to_app"></mwc-tab>
      <mwc-tab icon="camera"></mwc-tab>
    </mwc-tab-bar>

    <h3>Image Icons</h3>
    <mwc-tab-bar activeIndex="2">
      <mwc-tab hasImageIcon>
        <svg slot="icon" width="10px" height="10px">
          <circle r="5px" cx="5px" cy="5px" color="red"></circle>
        </svg>
      </mwc-tab>
      <mwc-tab hasImageIcon>
        <svg slot="icon" width="10px" height="10px">
          <rect width="10px" height="10px" color="green"></rect>
        </svg>
      </mwc-tab>
      <mwc-tab hasImageIcon>
        <svg slot="icon" width="14.143px" height="14.143px">
          <rect width="10px" height="10px" color="blue" y="2.071px" x="2.071px" style="transform: rotate(45deg); transform-origin: center"></rect>
        </svg>
      </mwc-tab>
    </mwc-tab-bar>

    <h3>With Icons - Stacked</h3>
    <mwc-tab-bar activeIndex="1">
      <mwc-tab label="one" icon="accessibility" stacked></mwc-tab>
      <mwc-tab label="two" icon="exit_to_app" stacked></mwc-tab>
      <mwc-tab label="three" icon="camera" stacked></mwc-tab>
    </mwc-tab-bar>

    <h3>With Icons - Stacked - Min Width Indicator</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" icon="accessibility" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="two" icon="exit_to_app" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="three" icon="camera" stacked isMinWidthIndicator></mwc-tab>
    </mwc-tab-bar>

    <h3>Scrolling</h3>
    <mwc-tab-bar>
      <mwc-tab label="one"></mwc-tab>
      <mwc-tab label="two"></mwc-tab>
      <mwc-tab label="three"></mwc-tab>
      <mwc-tab label="four"></mwc-tab>
      <mwc-tab label="five"></mwc-tab>
      <mwc-tab label="six"></mwc-tab>
      <mwc-tab label="seven"></mwc-tab>
      <mwc-tab label="eight"></mwc-tab>
      <mwc-tab label="nine"></mwc-tab>
      <mwc-tab label="ten"></mwc-tab>
    </mwc-tab-bar>

    <h3>Scrolling - Width Icons - Stacked - Min Width Indicator</h3>
    <mwc-tab-bar>
      <mwc-tab label="one" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="two" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="three" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="four" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="five" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="six" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="seven" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="eight" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="nine" icon="camera" stacked isMinWidthIndicator></mwc-tab>
      <mwc-tab label="ten" icon="camera" stacked isMinWidthIndicator></mwc-tab>
    </mwc-tab-bar>

    <h3>Icon indicator</h3>
    <mwc-tab-bar>
      <mwc-tab icon="camera" isFadingIndicator indicatorIcon="donut_large"></mwc-tab>
      <mwc-tab icon="accessibility" isFadingIndicator indicatorIcon="donut_large"></mwc-tab>
      <mwc-tab icon="exit_to_app" isFadingIndicator indicatorIcon="donut_large"></mwc-tab>
    </mwc-tab-bar>

    <h3>RTL</h3>
    <iframe src="/#/tabs_rtl"></iframe>
  </main>
</template>

<style lang="less" scoped>
iframe {
  border: 1px solid gray;
  height: 380px;
  width: 100%;
}
</style>
