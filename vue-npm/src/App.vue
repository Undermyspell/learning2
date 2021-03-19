<template>
  <div id="app">
    <HelloWorldList/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorldList from "./components/HelloWorldList.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorldList
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
