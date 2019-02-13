<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import HOME from "@/components/HOME.vue";
import NavBar from "@/components/NavBar.vue";
import Employees from "@/components/Employees.vue";


export default {
  name: "App",
  components: {
    HOME,
    NavBar,
    Employees
  },
  mounted() {
    this.$store.dispatch("loadEmployees");
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
