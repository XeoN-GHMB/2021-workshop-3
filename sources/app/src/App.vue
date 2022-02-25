<template>
     <nav id="nav">
        <router-link to="/">VueJS</router-link> |
        <router-link to="/shoelace">Shoelace</router-link> |
        <router-link to="/viur">ViUR</router-link>
      </nav>
      <router-view />
</template>

<style lang="less">
@import "style/app.less";

h3{
  font-weight: var(--sl-font-weight-bold);
  margin: 10px 0;
}

body {
  font-family: 'Source Sans Pro', 'Open Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--sl-color-primary-500);
    }
  }
}


</style>
<script>
import global from './global.js';
import {provide} from 'vue';

export default {
    components: {},
    setup(){
      provide("global",global)
    }
}
</script>
