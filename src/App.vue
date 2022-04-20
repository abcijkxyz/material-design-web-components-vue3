<template>
  <mwc-top-app-bar>
    <div>
      <router-view/>
    </div>
  </mwc-top-app-bar>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="value1" />
    <a-date-picker v-model:value="value2" picker="week" />
    <a-date-picker v-model:value="value3" picker="month" />
    <a-date-picker v-model:value="value4" picker="quarter" />
    <a-date-picker v-model:value="value5" picker="year" />
  </a-space>
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>  <a-button>Add</a-button>
  <mwc-button id="myButton" label="Click Me!" raised @click="clickButton"></mwc-button>
  <mwc-icon-button icon="code" ></mwc-icon-button>
   <mwc-icon-button icon="code" disabled></mwc-icon-button>
  <mwc-dialog open>
    <div>Discard draft?</div>
    <mwc-button dialogAction="discard">
      Discard
    </mwc-button>
    <mwc-button dialogAction="cancel">
      Cancel
    </mwc-button>
  </mwc-dialog>
</template>

<script>
import { ref } from 'vue';

import HelloWorld from "./components/HelloWorld.vue";

import "@material/mwc-button";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import '@material/mwc-dialog';
import '@material/mwc-radio/mwc-radio';
import '@material/mwc-formfield/mwc-formfield';

export default { 
   setup() {
    return {
      value1: ref(),
      value2: ref(),
      value3: ref(),
      value4: ref(),
      value5: ref(),
    };
  },

  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    handleAbout() {
      this.$router.push("About");
    },
    clickButton() {
      alert("You clicked!");
      console.log("111111111111", "---------");
    },
  },
};



 

</script>

<style>
body {
  margin: 0px;
}

a,
a:visited {
  color: white;
  text-decoration: none;
  padding: 5px;
}
</style>
