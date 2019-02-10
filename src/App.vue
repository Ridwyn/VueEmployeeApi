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
  }
  // data: function() {
  //   return {
  //     translatedText: ""
  //   };
  // }

  // methods:{
  //   translateText:function(text, language){
  //     this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180719T201434Z.cd648a8c2d5e2617.4e84f0aa2f8e4924863c9dc80911e47bf54bd3ad&lang='+language+'&text='+text)
  //     .then((response) =>{
  //       this.translatedText = (response.body.text[0]);
  //     })

  //   }
  // }
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
