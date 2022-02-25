<template>

  <sl-card v-if="global.state.userLoggedIn!=='success'">
    <sl-alert v-if="global.state.userLoggedIn==='failed'" open variant="danger" duration="3000">
      <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
      Login Failed
    </sl-alert>

    <sl-input type="text" name="name" v-model="state.name" placeholder="username" clearable @sl-clear="state.name=''"></sl-input>
    <sl-input @keydown.enter="onLoginAction" type="password" name="password" v-model="state.password" placeholder="password" @sl-clear="state.password=''"  toggle-password></sl-input>
    <br>
    <sl-button @click="onLoginAction" :disabled="!state.isFilled" :loading="global.state.userLoggedIn==='loading'">
      Login
    </sl-button>

  </sl-card>

  <div v-else>
    <sl-alert v-if="global.state.userLoggedIn==='success'" open variant="success" duration="3000">
      <sl-icon slot="icon" name="check"></sl-icon>
      Login Success
    </sl-alert>
    <sl-button @click="onLogoutAction">Logout</sl-button>
  </div>

</template>

<script>
import "@viur/viur-shoelace/dist/components/card/card.js"
import "@viur/viur-shoelace/dist/components/spinner/spinner.js"
import "@viur/viur-shoelace/dist/components/alert/alert.js"
import {reactive, inject, computed, onMounted} from "vue";

import userLogic from "@/scripts/userLogic.js";

export default {
  name: "user-login",
  setup(props,context){
    const global = inject("global")
    const {login, logout, isLoggedIn} = userLogic(global)
    const state = reactive({
      name:"",
      password:"",
      isFilled:computed(()=> state.name && state.password)
    })


    onMounted(()=>{
      isLoggedIn()
    })

    function onLoginAction(e){
      login(state.name,state.password)
      state.name = ""
      state.password = ""
    }

    function onLogoutAction(e){
      logout()
    }

    return {
      global,
      state,
      onLoginAction,
      onLogoutAction
    }
  }
}
</script>

<style lang="less" scoped>
*{
  text-align: left;
}
</style>