<script setup>
import { onMounted } from 'vue'
import '@material/mwc-menu'
import '@material/mwc-list/mwc-list-item'
import '@material/mwc-select'
import '@material/mwc-textfield'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  window.basicMenu.anchor = window.basicButton

  window.basicButton.addEventListener('click', function () {
    window.basicMenu.open = !window.basicMenu.open
  })

  window.cornerMenu.anchor = window.cornerButton

  window.cornerSelect.addEventListener('change', function () {
    window.cornerMenu.corner = window.cornerSelect.value
  })

  window.cornerButton.addEventListener('click', function () {
    window.cornerMenu.open = !window.cornerMenu.open
  })

  window.quickMenu.anchor = window.quickButton

  window.quickButton.addEventListener('click', function () {
    window.quickMenu.open = !window.quickMenu.open
  })

  window.fixedMenu.anchor = window.fixedButton

  window.fixedButton.addEventListener('click', function () {
    window.fixedMenu.open = !window.fixedMenu.open
  })

  window.nonfixedMenu.anchor = window.nonfixedButton

  window.nonfixedButton.addEventListener('click', function () {
    window.nonfixedMenu.open = !window.nonfixedMenu.open
  })

  window.absoluteButton.addEventListener('click', function () {
    window.absoluteMenu.open = !window.absoluteMenu.open
  })

  window.absoluteX.addEventListener('input', function () {
    window.absoluteMenu.x = Number(window.absoluteX.value)
  })

  window.absoluteY.addEventListener('input', function () {
    window.absoluteMenu.y = Number(window.absoluteY.value)
  })

  window.activatableMenu.anchor = window.activatableButton

  window.activatableButton.addEventListener('click', function () {
    window.activatableMenu.open = !window.activatableMenu.open
  })

  window.multiMenu.anchor = window.multiButton

  window.multiButton.addEventListener('click', function () {
    window.multiMenu.open = !window.multiMenu.open
  })

  window.groupedMenu.anchor = window.groupedButton

  window.groupedButton.addEventListener('click', function () {
    window.groupedMenu.open = !window.groupedMenu.open
  })

  window.dfsMenu.anchor = window.dfsButton

  window.dfsSelect.addEventListener('change', function () {
    window.dfsMenu.defaultFocus = window.dfsSelect.value
  })

  window.dfsButton.addEventListener('click', function () {
    window.dfsMenu.open = !window.dfsMenu.open
  })

  window.absoluteLeftButton.addEventListener('click', function () {
    window.absoluteAnchorMenu.anchor = window.absoluteLeftButton
    window.absoluteAnchorMenu.open = !window.absoluteAnchorMenu.open
  })

  window.absoluteRightButton.addEventListener('click', function () {
    window.absoluteAnchorMenu.anchor = window.absoluteRightButton
    window.absoluteAnchorMenu.open = !window.absoluteAnchorMenu.open
  })
})
</script>

<template>
  <DemoHeader component="Menu" package="menu"></DemoHeader>
  <div class="menu-body">
    <main>
      <div style="position: relative">
        <mwc-button id="basicButton" raised label="Open Basic Menu"></mwc-button>
        <mwc-menu id="basicMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>
      </div>

      <div style="position: relative">
        <mwc-button id="cornerButton" raised label="Open Menu With Corner"> </mwc-button>
        <mwc-menu id="cornerMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>

        <mwc-select outlined id="cornerSelect" label="Menu Corner">
          <mwc-list-item selected></mwc-list-item>
          <mwc-list-item value="TOP_LEFT">TOP_LEFT</mwc-list-item>
          <mwc-list-item value="TOP_RIGHT">TOP_RIGHT</mwc-list-item>
          <mwc-list-item value="BOTTOM_LEFT">BOTTOM_LEFT</mwc-list-item>
          <mwc-list-item value="BOTTOM_RIGHT">BOTTOM_RIGHT</mwc-list-item>
          <mwc-list-item value="TOP_START">TOP_START</mwc-list-item>
          <mwc-list-item value="TOP_END">TOP_END</mwc-list-item>
          <mwc-list-item value="BOTTOM_START">BOTTOM_START</mwc-list-item>
          <mwc-list-item value="BOTTOM_END">BOTTOM_END</mwc-list-item>
        </mwc-select>
      </div>

      <div style="position: relative">
        <mwc-button id="quickButton" raised label="Open Quick Menu"></mwc-button>
        <mwc-menu quick id="quickMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>
      </div>

      <div class="scrollable">
        <span>
          <mwc-button id="fixedButton" raised label="Open Fixed Menu"></mwc-button>
          <mwc-menu fixed id="fixedMenu">
            <mwc-list-item>one</mwc-list-item>
            <mwc-list-item>two</mwc-list-item>
            <mwc-list-item>three</mwc-list-item>
            <mwc-list-item disabled><div>four</div></mwc-list-item>
            <li divider></li>
            <mwc-list-item>aaa</mwc-list-item>
            <mwc-list-item>bbb</mwc-list-item>
          </mwc-menu>
        </span>

        <span style="position: relative">
          <mwc-button id="nonfixedButton" raised label="Open Non-Fixed Menu"></mwc-button>
          <mwc-menu id="nonfixedMenu">
            <mwc-list-item>one</mwc-list-item>
            <mwc-list-item>two</mwc-list-item>
            <mwc-list-item>three</mwc-list-item>
            <mwc-list-item disabled><div>four</div></mwc-list-item>
            <li divider></li>
            <mwc-list-item>aaa</mwc-list-item>
            <mwc-list-item>bbb</mwc-list-item>
          </mwc-menu>
        </span>
        <div>Open each menu and then scroll this div</div>
        <div class="spacer"></div>
      </div>

      <div>
        <mwc-button id="absoluteButton" raised label="Open Absolute Menu (no anchor)"></mwc-button>
        <mwc-menu absolute x="0" y="0" id="absoluteMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>

        <mwc-textfield type="number" label="x" outlined id="absoluteX" value="0"> </mwc-textfield>
        <mwc-textfield type="number" label="y" outlined id="absoluteY" value="0"> </mwc-textfield>
      </div>

      <div style="position: relative">
        <mwc-button id="activatableButton" raised label="Open Activatable Menu"></mwc-button>
        <mwc-menu activatable id="activatableMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>
      </div>

      <div style="position: relative">
        <mwc-button id="multiButton" raised label="Open Multi (activatable) Menu"></mwc-button>
        <mwc-menu multi activatable id="multiMenu">
          <mwc-list-item selected activated>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item selected activated>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>
      </div>

      <div style="position: relative">
        <style v-is="'style'">
          #groupedMenu mwc-list-item:not([selected]) mwc-icon {
            display: none;
          }
        </style>

        <mwc-button id="groupedButton" raised label="Open Grouped Menu"></mwc-button>
        <mwc-menu multi id="groupedMenu">
          <mwc-list-item selected group="a" graphic="icon">
            <mwc-icon slot="graphic">check</mwc-icon>
            <span>a-one</span>
          </mwc-list-item>
          <mwc-list-item group="a" graphic="icon">
            <mwc-icon slot="graphic">check</mwc-icon>
            <span>a-two</span>
          </mwc-list-item>
          <mwc-list-item group="a" graphic="icon">
            <mwc-icon slot="graphic">check</mwc-icon>
            <span>a-three</span>
          </mwc-list-item>
          <li divider></li>
          <mwc-list-item selected group="b" graphic="icon">
            <mwc-icon slot="graphic">check</mwc-icon>
            <span>b-one</span>
          </mwc-list-item>
          <mwc-list-item group="b" graphic="icon">
            <mwc-icon slot="graphic">check</mwc-icon>
            <span>b-two</span>
          </mwc-list-item>
        </mwc-menu>
      </div>

      <div style="position: relative">
        <mwc-button id="dfsButton" raised label="Open Menu With Default Focus"> </mwc-button>
        <mwc-menu id="dfsMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>

        <mwc-select outlined id="dfsSelect" label="Menu Default Focus">
          <mwc-list-item value="NONE">NONE</mwc-list-item>
          <mwc-list-item value="LIST_ROOT" selected>LIST_ROOT</mwc-list-item>
          <mwc-list-item value="FIRST_ITEM">FIRST_ITEM</mwc-list-item>
          <mwc-list-item value="LAST_ITEM">LAST_ITEM</mwc-list-item>
        </mwc-select>
      </div>

      <div>
        <h3>Absolute w/ anchor</h3>
        <div>This is reusing the same menu and changing the anchor</div>
        <mwc-button id="absoluteLeftButton" raised label="anchor = this"> </mwc-button>
        <mwc-button id="absoluteRightButton" raised label="anchor = this"> </mwc-button>
        <mwc-menu absolute id="absoluteAnchorMenu">
          <mwc-list-item>one</mwc-list-item>
          <mwc-list-item>two</mwc-list-item>
          <mwc-list-item>three</mwc-list-item>
          <mwc-list-item disabled><div>four</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>aaa</mwc-list-item>
          <mwc-list-item>bbb</mwc-list-item>
        </mwc-menu>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.menu-body {
  height: 90vh;
}

main > div {
  margin-bottom: 16px;
}

.scrollable {
  border: solid 1px black;
  overflow-y: scroll;
  height: 100px;
}

.scrollable .spacer {
  height: 1000px;
}

#absoluteX,
#absoluteY {
  width: 100px;
}
</style>
