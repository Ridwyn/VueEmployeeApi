<template>
  <div class="container">
    <div class="col-md-4 mx-auto">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="#" alt="Card image cap">
        <div class="card-body">
          <p class="card-title">Name: {{firstname}} {{lastname}}</p>
          <p class="card-text">Role: {{role}}</p>
          <p class="card-text">Department: {{department}}</p>
          <p class="card-text">id: {{employee_id}}</p>
          <button v-on:click="deleteEmployee" class="btn btn-danger">Delete Profile</button>

          <!-- <router-link class="btn btn-primary" v-bind:to="{name:
           'EditEmployee', params:{employee_id:employee._id}}">
               Edit Profile
          </router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ViewEmployees",
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

  //create the fetch data method to collect the data and assign to employee object in data()
  methods: {
    // Method to fetch data
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

    // Method to delete from Database
    deleteEmployee() {
      if (confirm("Are you sure")) {
        this.$store.dispatch("loadEmployees");
        axios
          .delete(
            `https://flaskemployeeapi.herokuapp.com/api/delete/${
              this.$route.params.employee_id
            }`
          )
          .then(response => {
            console.log(response.data);
            alert("Succesfully deleted");
            this.$router.push('/employees')
          });
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
