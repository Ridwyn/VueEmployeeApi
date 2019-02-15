<template>
  <div class="container">
    <h2>Edit Profile</h2>
    <form id="app" @submit="updateEmployee">
      <p>
        <label for="firstname">Firstname</label>
        <input id="firstname" v-model="firstname" type="text" name="firstname">
      </p>

      <p>
        <label for="lastname">Lastname</label>
        <input id="lastname" v-model="lastname" type="text" name="lastname">
      </p>

      <p>
        <label for="role">Role</label>
        <input id="role" v-model="role" name="role">
      </p>

      <p>
        <label for="department">Department</label>
        <input id="department" v-model="department" name="department">
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
("use strict");

var qs = require("querystringify");

export default {
  name: "EditEmployee",
  data() {
    return {
      q: this.$route.params.employee_id,
      employee_id: null,
      firstname: null,
      lastname: null,
      role: null,
      department: null
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios
        .get(
          `https://flaskemployeeapi.herokuapp.com/api/get/${
            this.$route.params.employee_id
          }`
        )
        .then(response => {
          console.log(response.data);
          let employee = response.data;
          (this.employee_id = employee._id),
            (this.firstname = employee.firstname),
            (this.lastname = employee.lastname),
            (this.role = employee.role),
            (this.department = employee.department);
        });
    },

    // Method to edit employee
    updateEmployee() {
      // Make an object using querysting
      const employeeQs = qs.parse(
        `firstname=${this.firstname}&lastname=${this.lastname}&role=${
          this.role
        }&department=${this.department}`
      );

      // then JSON stringufy the object, server design to accept only json objects
      const employeeStr = JSON.stringify(employeeQs);

      //   if Confirmed t edit employee then make axios put request
      if (confirm("Do you want to update ")) {
        axios({
          method: "put",
          url: `https://flaskemployeeapi.herokuapp.com/api/update/${
            this.$route.params.employee_id
          }`,
          data: employeeStr,
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            console.log(response);
            sessionStorage.clear();
            this.$router.push(`/employees`);
            alert("Employee Updated");
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
