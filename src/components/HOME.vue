<template>
  <div>
    <h1>Home</h1>
    <h4 class="center">Welcome to My Employee Manager App Where you manage your eomployee's profile</h4>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
</style>
