<script setup>
import { onMounted } from 'vue'
import '@material/mwc-dialog'
import '@material/mwc-button'
import '@material/mwc-textfield'

import DemoHeader from '@/components/DemoHeader.vue'

onMounted(() => {
  const buttons = document.body.querySelectorAll('mwc-button[data-num]')

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    const buttonNum = button.dataset.num

    const listenerFactory = (numButton) => {
      return function () {
        const dialog = document.body.querySelector('#dialog' + numButton)
        dialog.open = true
      }
    }

    const listener = listenerFactory(buttonNum)

    button.addEventListener('click', listener)
  }

  window.toggleActions.onclick = function () {
    const dialog = document.body.querySelector('#dialog4')
    const hideActionSpan = document.body.querySelector('#hideActionVal')

    const hideAction = !dialog.hideActions
    dialog.hideActions = hideAction
    hideActionSpan.innerText = hideAction
  }

  const dialog = document.querySelector('#dialog8')
  const textField = document.querySelector('#dialog8-text-field')
  const primaryButton = document.querySelector('#dialog8-primary-action-button')

  primaryButton.addEventListener('click', () => {
    // validate, possible asynchronous such as a server response
    const isValid = textField.checkValidity()
    if (isValid) {
      dialog.close()
      return
    }

    textField.reportValidity()
  })
})
</script>

<template>
  <DemoHeader component="Dialog" package="dialog"></DemoHeader>

  <main>
    <mwc-button data-num="1" raised>Basic</mwc-button>
    <mwc-dialog id="dialog1" heading="Dialog header">
      Dialog body text
      <mwc-button slot="primaryAction" dialogAction="ok">Action 2</mwc-button>
      <mwc-button slot="secondaryAction" dialogAction="cancel">Action 1</mwc-button>
    </mwc-dialog>

    <mwc-button data-num="2" raised>Actions</mwc-button>
    <mwc-dialog id="dialog2" heading="Actions">
      <p>
        By setting the dialogAction="my-action" attribute on any element projected into mwc-dialog, you can close the dialog by clicking on that element. The dialog will then fire a non-bubbling
        "closing" event and a non-bubbling "closed" event with an event detail of {action: "my-action"}
      </p>
      <mwc-button slot="primaryAction" dialogAction="customAction">This has action</mwc-button>
      <mwc-button slot="secondaryAction">this does not</mwc-button>
    </mwc-dialog>

    <mwc-button data-num="3" raised>Scrollable</mwc-button>
    <mwc-dialog id="dialog3" heading="My Title">
      <p>
        Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long
        text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will
        scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll.
        Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long
        text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really long text will scroll. Really log text will
        scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log
        text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll.
        Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text will scroll. Really log text
        will scroll.
      </p>
      <mwc-button slot="primaryAction" dialogAction="close">Close this!</mwc-button>
    </mwc-dialog>

    <mwc-button data-num="4" raised>Hide Actions</mwc-button>
    <mwc-dialog id="dialog4" heading="Hide Actions">
      <p>
        If you don't have actions, you may want to set the "hideActions" property. This property will remove extra whitespace at the bottom of this dialog. This button will toggle that whitespace:
      </p>
      <mwc-button raised id="toggleActions">Toggle hideActions</mwc-button>
      <div>
        mwc-dialog.hideActions is currently:
        <span id="hideActionVal"> false </span>
      </div>
    </mwc-dialog>

    <style v-is="'style'">
      .styled {
        --mdc-theme-surface: #fff;
        --mdc-dialog-scrim-color: rgba(35, 47, 52, 0.32);
        --mdc-dialog-heading-ink-color: #232f34;
        --mdc-dialog-content-ink-color: #232f34;
        --mdc-dialog-scroll-divider-color: transparent;
        --mdc-dialog-min-width: 500px;
        --mdc-dialog-max-width: 700px;
        --mdc-dialog-max-height: 350px;
        --mdc-dialog-shape-radius: 0px;

        /* color buttons */
        --mdc-theme-primary: #344955;
      }
    </style>

    <mwc-button data-num="5" raised>Styled</mwc-button>
    <mwc-dialog id="dialog5" heading="Styled" class="styled">
      <div>These are the current styles applied to this dialog</div>
      <pre>
--mdc-theme-surface: #FFF;
--mdc-dialog-scrim-color: rgba(35, 47, 52, .32);
--mdc-dialog-heading-ink-color: #232F34;
--mdc-dialog-content-ink-color: #232F34;
--mdc-dialog-scroll-divider-color: transparent;
--mdc-dialog-min-width: 500px;
--mdc-dialog-max-width: 700px;
--mdc-dialog-max-height: 350px;
--mdc-dialog-shape-radius: 0px;

/* color buttons */
--mdc-theme-primary: #344955;
        </pre
      >
      <mwc-button slot="primaryAction" dialogAction="close"> Too stylish for me! </mwc-button>
    </mwc-dialog>

    <mwc-button data-num="6" raised>Stacked</mwc-button>
    <mwc-dialog id="dialog6" heading="Stacked" stacked>
      <div>This is what happens when you set the stacked property on mwc-dialog. Notice that the primary action is now on top.</div>
      <mwc-button slot="primaryAction" dialogAction="close"> Primary </mwc-button>
      <mwc-button slot="secondaryAction" dialogAction="close"> Secondary </mwc-button>
    </mwc-dialog>

    <mwc-button data-num="7" raised>Initial Focus</mwc-button>
    <mwc-dialog id="dialog7" heading="Initial Focus">
      <div>In this example we set "dialogInitialFocus" on the mwc-textfield. When this dialog opens, it is auto-focused.</div>
      <mwc-textfield label="i am auto-focused" dialogInitialFocus> </mwc-textfield>
      <mwc-button slot="primaryAction" dialogAction="close"> Primary </mwc-button>
      <mwc-button slot="secondaryAction" dialogAction="close"> Secondary </mwc-button>
    </mwc-dialog>

    <mwc-button data-num="8" raised>Form Validation</mwc-button>
    <mwc-dialog id="dialog8" heading="Form Validation">
      <p>This dialog can validate user input before closing.</p>
      <mwc-textfield id="dialog8-text-field" minlength="3" maxlength="64" placeholder="First name" required> </mwc-textfield>
      <mwc-button id="dialog8-primary-action-button" slot="primaryAction"> Confirm </mwc-button>
      <mwc-button slot="secondaryAction" dialogAction="close"> Cancel </mwc-button>
    </mwc-dialog>
  </main>
</template>

<style lang="less" scoped>
body {
  min-height: calc(100vh - 4em);
}
</style>
