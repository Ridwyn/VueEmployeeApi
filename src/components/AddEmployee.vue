<template>
  <div class="container">
    <form id="app" @submit="sendForm">
      <!-- <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
      </p>-->
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
  name: "AddEmployee",
  data() {
    return {
      firstname: null,
      lastname: null,
      role: null,
      department: null,

      employee: {}
    };
  },

  created() {},

  //create the fetch data method to collect the data and assign to employee object in data()
  methods: {
    sendForm(e) {
      e.preventDefault();
      // Make an object using querysting
      const employeeQs = qs.parse(
        `firstname=${this.firstname}&lastname=${this.lastname}&role=${
          this.role
        }&department=${this.department}`
      );

      // then JSON stringufy the object
      const employeeStr = JSON.stringify(employeeQs);

      console.log(employeeStr);
      console.log(employeeQs);

      axios({
        method: "post",
        url: "https://flaskemployeeapi.herokuapp.com/api/add",
        data: employeeStr,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log(response);
          this.employee =response;
          this.$router.push('/employees')
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
