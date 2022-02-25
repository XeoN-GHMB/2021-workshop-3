<template>
  <div class="shoelace">
    <img src="../assets/shoelace.svg">
    <h1>Welcome to Shoelace</h1>
    <p>Shoelace provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology.</p>

    <sl-button style="margin-top:20px;" href="https://serene-allen-537100.netlify.app/"><sl-icon ref="arrow" slot="prefix" name="box-arrow-up-right"></sl-icon> Shoelace Documentation</sl-button>
    <br><br><br>
    <h3>Some Examples</h3>

    <sl-tab-group @slTabShow="tabChange">
      <sl-tab slot="nav" panel="buttons" active>Buttons</sl-tab>
      <sl-tab slot="nav" panel="dialog">Dialog</sl-tab>
      <sl-tab slot="nav" panel="elements">Elements</sl-tab>
      <sl-tab-panel name="buttons" active>

        <sl-button-group>
          <sl-button variant="primary" @click="openWelcomeDialog">Button</sl-button>
          <sl-button variant="danger" outline>Button</sl-button>
          <sl-dropdown>
            <sl-button slot="trigger" caret>Dropdown</sl-button>
            <sl-menu>
              <sl-menu-item>Item 1</sl-menu-item>
              <sl-menu-item>Item 2</sl-menu-item>
              <sl-menu-item>Item 3</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <sl-button variant="default"><sl-icon ref="gear" name="gear"></sl-icon></sl-button>
          <sl-button>
            Badges
            <sl-badge variant="danger" pill>6</sl-badge>
          </sl-button>
        </sl-button-group>

      </sl-tab-panel>

      <sl-tab-panel name="dialog">

        <sl-tooltip content="This is a tooltip">
          <sl-button @click="openWelcomeDialog">Hover Me</sl-button>
        </sl-tooltip>

      </sl-tab-panel>

      <sl-tab-panel name="elements">

        <sl-input clearable placeholder="this input is empty" label="7+7" help-text="Please enter the correct value" @input="checkinput"></sl-input>


      </sl-tab-panel>

    </sl-tab-group>


    <sl-dialog ref="welcomeDialog" label="Dialog" class="dialog-overview">
      Welcome to a shoelace dialog
      <sl-button slot="footer" variant="primary" @click="closeWelcomeDialog">close</sl-button>
    </sl-dialog>

    <h3>Use a global State counter</h3>
    <sl-button type="primary" @click="removeFromCounter">{{ global.state.counter }}</sl-button>

  </div>
</template>

<script>
// import view specific components
import "@viur/viur-shoelace/dist/components/tab/tab.js"
import "@viur/viur-shoelace/dist/components/tab-group/tab-group.js"
import "@viur/viur-shoelace/dist/components/tab-panel/tab-panel.js"

import counterLogic from '@/scripts/counterLogic.js'

import {ref, onMounted,inject} from 'vue'


export default {
  name: "ShoelaceView",
  setup(props,context){
    const global = inject("global")
    const {removeFromCounter} = counterLogic(global)
    const welcomeDialog=ref(null)


    function tabChange(e){
      // show popup on change
      if(e.detail.name === 'dialog'){
        openWelcomeDialog()
      }
    }
    function openWelcomeDialog(e){
      welcomeDialog.value.show()
    }
    function closeWelcomeDialog(e){
      welcomeDialog.value.hide()
    }

    function checkinput(e){
      if (parseInt(e.target.value)===14){
        e.target.invalid=false
      }else{
        e.target.invalid=true
      }
    }


    return {
      tabChange,
      welcomeDialog,
      closeWelcomeDialog,
      checkinput,
      global,
      removeFromCounter,
      openWelcomeDialog}
  }
};
</script>
<style scoped>
  img{
    width:25%;
  }
  sl-tab-group{
    max-width: 50%;
    margin: 0 auto;
    text-align: left;
  }

  sl-input[invalid]::part(base) {
    border-color: var(--sl-color-danger-500);
  }

  sl-input[invalid]:focus-within::part(base) {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-color-danger-500);
  }

</style>






