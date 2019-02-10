<template>
  <div>
    <h1 class="center">Employees page</h1>
    <ul>
      <li class="card-panel" v-for="employee in employees">
        <span class="id">id:{{employee._id}}</span>
        <span class="name">firstname:
          <strong>{{employee.firstname}}</strong>
        </span>
        <span class="price">lastname:
          <strong>{{employee.lastname}}</strong>
        </span>
        <span class="price">department:
          <strong>{{employee.department}}</strong>
        </span>
        <span class="price">role:
          <strong>{{employee.role}}</strong>
        </span>
      </li>
    </ul>
    <a href="#" v-on:click="loadEmployees">Load Employees</a>
  </div>
</template>

<script>
import { mappedState } from "vuex";
export default {
  name: "Employees",
  data() {
    return {
      employees: []
    };
  },
  methods: {
    loadEmployees() {
      this.$http
        .get("https://flaskemployeeapi.herokuapp.com/api/employees")
        .then(response => {
          response.body.forEach(element => {
            this.employees.push(element);
          });
          console.log(response.body);
        });
    }
  }

  //   computed: {
  //     employees() {
  //       return this.$store.getters.employees;
  //     }
  //   }
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
