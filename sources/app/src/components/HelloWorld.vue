<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js Docs</a></li>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Vue Router Docs</a></li>
            <li><a href="https://vuejs.org/style-guide/rules-essential.html" target="_blank" rel="noopener">Vue Style Guide</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <h3>Vue Devtools</h3>
        <ul>
          <li><a href="https://devtools.vuejs.org/guide/installation.html#chrome" target="_blank"
                     rel="noopener">Debugger for Chrome</a></li>
          <li><a href="https://devtools.vuejs.org/guide/installation.html#firefox" target="_blank"
                     rel="noopener">Debugger for Firefox</a></li>
          <li><a href="https://plugins.jetbrains.com/plugin/9442-vue-js" target="_blank"
                     rel="noopener">Pycharm Plugin</a></li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack" target="_blank"
                     rel="noopener">VSCode Extension</a></li>
        </ul>


        <h3>ViUR Shoelace Components</h3>
        <sl-button @click="showPopup">
            <sl-icon ref="cloud" name="cloud"></sl-icon>
            I'am a shoelace button
        </sl-button>


        <h4>Use Shoelace for bootstrap icons, viur icons and custom icons</h4>
        <sl-icon ref="viur" class="viuricon" library="myicons" name="viur"></sl-icon>
        <sl-icon ref="puzzle" style="font-size: 2em;color:var(--sl-color-info-500);" library="bootstrap" name="puzzle-fill"></sl-icon>
        <sl-icon ref="heart" style="font-size: 2em;color:var(--sl-color-success-500);margin-left:10px;" name="heart-fill"></sl-icon>

        <sl-dialog ref="helloDialog" label="Dialog">
            I'am a Shoelace Dialog
            <sl-button slot="footer" type="primary" @click="helloDialog.hide()">Close</sl-button>
        </sl-dialog>

        <h3>Request Some Demo Data</h3>
        <p>{{ state.requestdata }}</p>

        <h3>Use a global State counter</h3>
        <sl-button type="primary" @click="addToCounter"> Click me: {{ global.state.counter }}</sl-button>


    </div>
</template>

<script>

import {ref, reactive, inject} from 'vue'
import Request from '@/request.js'
import counterLogic from '@/scripts/counterLogic.js'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    setup(props, context) {
        const global = inject("global")
        const {addToCounter} = counterLogic(global)

        const helloDialog = ref()
        const state = reactive({
            "requestdata": "No Data",
        })

        function showPopup(e) {
            helloDialog.value.show()
        }

        Request.get("https://jsonplaceholder.typicode.com/todos/1").then((resp) => {
            state.requestdata = resp.data
        })

        return {
            state,
            showPopup,
            helloDialog,
          addToCounter,
          global
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


.viuricon{
  color:var(--sl-color-primary-500);
  font-size: 3em;
  filter: drop-shadow(0px 0px 10px var(--sl-color-primary-500));

}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

sl-button {
  margin: 16px 0 0;
}

sl-dialog {
  text-align: left;
}

</style>
