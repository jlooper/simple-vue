<template>
  <div id="app">
    <Nav />
    <div class="wrapper">
        <router-view />
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav";

export default {
  components: { Nav }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>