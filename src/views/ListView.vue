<script setup>
import { onMounted } from 'vue'
import '@material/mwc-list'
import '@material/mwc-list/mwc-list-item'
import '@material/mwc-list/mwc-check-list-item'
import '@material/mwc-list/mwc-radio-list-item'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  const basic = document.querySelector('#basic')
  const basicOut = document.querySelector('#basicIndex')

  basic.addEventListener('selected', function () {
    basicOut.innerText = basic.index
  })

  const multi = document.querySelector('#multi')
  const multiOut = document.querySelector('#multiIndex')

  multi.addEventListener('selected', function () {
    multiOut.innerText = '{ ' + Array.from(multi.index) + ' }'
  })

  const activatable = document.querySelector('#activatable')
  const activatableOut = document.querySelector('#activatableIndex')

  activatable.addEventListener('selected', function () {
    activatableOut.innerText = activatable.index
  })

  const checklist = document.querySelector('#checklist')
  const checklistOut = document.querySelector('#checklistIndex')

  checklist.addEventListener('selected', function () {
    checklistOut.innerText = '{ ' + Array.from(checklist.index) + ' }'
  })

  const radio = document.querySelector('#radio')
  const radioOut = document.querySelector('#radioIndex')

  radio.addEventListener('selected', function () {
    radioOut.innerText = radio.index
  })

  const multiRadio = document.querySelector('#multiRadio')
  const multiRadioOut = document.querySelector('#multiRadioIndex')

  multiRadio.addEventListener('selected', function () {
    multiRadioOut.innerText = '{ ' + Array.from(multiRadio.index) + ' }'
  })

  const graphics = document.querySelector('#graphics')
  const graphicsOut = document.querySelector('#graphicsIndex')

  graphics.addEventListener('selected', function () {
    graphicsOut.innerText = '{ ' + Array.from(graphics.index) + ' }'
  })
})
</script>

<template>
  <DemoHeader component="List" package="list"></DemoHeader>
  <main>
    <h1>Basic</h1>

    <mwc-list id="basic">
      <mwc-list-item selected>Item 0</mwc-list-item>
      <mwc-list-item>Item 1</mwc-list-item>
      <mwc-list-item>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>

    <div>Selected index: <span id="basicIndex"></span></div>

    <h1>Multi</h1>

    <mwc-list multi id="multi">
      <mwc-list-item selected>Item 0</mwc-list-item>
      <mwc-list-item>Item 1</mwc-list-item>
      <mwc-list-item selected>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>

    <div>Selected index (Set&lt;number&gt;): <span id="multiIndex"></span></div>

    <h1>Activatable</h1>

    <mwc-list activatable id="activatable">
      <mwc-list-item>Item 0</mwc-list-item>
      <mwc-list-item selected activated>Item 1</mwc-list-item>
      <mwc-list-item>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>

    <div>Selected index: <span id="activatableIndex"></span></div>

    <h1>Non-interactive</h1>

    <mwc-list noninteractive>
      <mwc-list-item>Item 0</mwc-list-item>
      <mwc-list-item>Item 1</mwc-list-item>
      <mwc-list-item>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>

    <h1>Checklist</h1>

    <mwc-list multi id="checklist">
      <mwc-check-list-item selected>Item 0</mwc-check-list-item>
      <mwc-check-list-item>Item 1</mwc-check-list-item>
      <mwc-check-list-item left selected>Item 2 (left)</mwc-check-list-item>
      <mwc-check-list-item left>Item 3 (left)</mwc-check-list-item>
      <mwc-check-list-item disabled><span>disabled</span></mwc-check-list-item>
    </mwc-list>

    <div>Selected index (Set&lt;number&gt;): <span id="checklistIndex"></span></div>

    <h1>Radio list</h1>

    <mwc-list id="radio">
      <mwc-radio-list-item group="a" selected>Item 0</mwc-radio-list-item>
      <mwc-radio-list-item group="a">Item 1</mwc-radio-list-item>
      <mwc-radio-list-item left group="a">Item 2 (left)</mwc-radio-list-item>
      <mwc-radio-list-item left group="a">Item 3 (left)</mwc-radio-list-item>
    </mwc-list>

    <div>Selected index: <span id="radioIndex"></span></div>

    <h1>Multi Radio list (with divider)</h1>

    <mwc-list multi id="multiRadio">
      <mwc-radio-list-item group="b">Item 0</mwc-radio-list-item>
      <mwc-radio-list-item group="b" selected>Item 1</mwc-radio-list-item>
      <li divider role="separator"></li>
      <mwc-radio-list-item group="c" selected>Item 2</mwc-radio-list-item>
      <mwc-radio-list-item group="c">Item 3</mwc-radio-list-item>
    </mwc-list>

    <div>Selected index (Set&lt;number&gt;): <span id="multiRadioIndex"></span></div>

    <h1>Two-line (padded dividers)</h1>

    <mwc-list multi>
      <mwc-list-item twoline>
        <span>Item 0</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
      <mwc-list-item twoline>
        <span>Item 1</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
      <mwc-list-item twoline>
        <span>Item 2</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
      <mwc-list-item twoline>
        <span>Item 3</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
    </mwc-list>

    <h1>Graphics (inset dividers)</h1>

    <mwc-list id="graphics" multi>
      <mwc-list-item twoline graphic="avatar" noninteractive hasMeta>
        <span>Non-interactive two line avatar graphic</span>
        <span slot="secondary">email@domain.tld</span>
        <span slot="graphic" class="material-icons inverted">folder</span>
        <span slot="meta" class="material-icons">info</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item graphic="icon" hasMeta>
        <span>Icon graphic</span>
        <span slot="graphic" class="material-icons inverted">folder</span>
        <span slot="meta" class="material-icons">info</span>
      </mwc-list-item>
      <li divider inset role="separator"></li>
      <mwc-list-item graphic="medium" hasMeta>
        <span>medium graphic</span>
        <span slot="graphic" class="material-icons inverted">folder</span>
        <span slot="meta" class="material-icons">info</span>
      </mwc-list-item>
      <li divider inset role="separator"></li>
      <mwc-list-item graphic="large" hasMeta>
        <span>large graphic</span>
        <span slot="graphic" class="material-icons inverted">folder</span>
        <span slot="meta" class="material-icons">info</span>
      </mwc-list-item>
    </mwc-list>

    <div>Selected index (Set&lt;number&gt;): <span id="graphicsIndex"></span></div>

    <h1>Styled</h1>

    <style v-is="'style'">
      #styled {
        --mdc-theme-primary: red;
        --mdc-list-vertical-padding: 0px;
        --mdc-list-side-padding: 0px;
      }
    </style>

    <mwc-list activatable id="styled">
      <mwc-list-item selected>Item 0</mwc-list-item>
      <mwc-list-item>Item 1</mwc-list-item>
      <mwc-list-item>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>

    <h1>Styled (Ripple Disabled)</h1>

    <style v-is="'style'">
      /* disable ripple */
      #styledr {
        --mdc-ripple-color: transparent;
      }

      #styledr > * {
        transition: background-color 0.2s, color 0.2s;
      }

      #styledr [selected] {
        background-color: rgb(33, 33, 33);
        color: white;
      }

      #styledr [mwc-list-item]:not([selected]):hover,
      #styledr [mwc-list-item]:not([selected]):focus {
        background-color: rgba(33, 33, 33, 0.3);
      }

      #styledr [mwc-list-item]:not([selected]):active {
        background-color: rgba(33, 33, 33, 0.4);
      }

      #styledr [mwc-list-item][selected]:hover,
      #styledr [mwc-list-item][selected]:focus {
        background-color: rgba(33, 33, 33, 0.9);
      }

      #styledr [mwc-list-item][selected]:active {
        background-color: rgba(33, 33, 33, 0.8);
      }
    </style>

    <mwc-list id="styledr">
      <mwc-list-item selected>Item 0</mwc-list-item>
      <mwc-list-item>Item 1</mwc-list-item>
      <mwc-list-item>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>
  </main>
</template>

<style lang="less" scoped>
mwc-list {
  border: 1px solid lightgray;
  max-width: 400px;
  margin-bottom: 8px;
}

.inverted {
  color: white;
  background-color: gray;
}
</style>
