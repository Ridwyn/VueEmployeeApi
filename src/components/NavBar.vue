<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Employee-Manager</a>
      <button
        id="navBtn"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse show" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li></li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/employees">Employees</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/add">Add Employee</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #7c7c7c;
  color: #ffff;
}

.nav-link {
  color: #080c20 !important;
  font-weight: 600 !important;
}

.nav-link:hover {
  color: #fdfbfb !important;
  font-weight: 600 !important;
  border-bottom: #fdfbfb 2px solid !important;
}
</style>
