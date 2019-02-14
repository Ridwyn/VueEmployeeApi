<template>
  <div class="container">
    <h1 class="center">Employees page</h1>
    <div class="row">
      <div
        class="col-xs-9 col-sm-6 col-lg-4 my-3 px-1 mx-auto"
        v-for="(employee,index) in employees"
        :key="index"
      >
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <p class="card-title">
              <strong>Name:</strong>
              {{employee.firstname}} {{employee.lastname}}
            </p>
            <p class="card-text">
              <strong>Role:</strong>
              {{employee.role}}
            </p>
            <p class="card-text">
              <strong>Department:</strong>
              {{employee.department}}
            </p>
            <p class="card-text">
              <strong>id:</strong>
              {{employee._id}}
            </p>
            <router-link
              class="btn btn-primary"
              v-bind:to="{name:
           'ViewEmployee', params:{employee_id:employee._id}}"
            >View Profile</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- <a href="#" v-on:click="getEmployees">Load Employees</a> -->
  </div>
</template>

<script>
import { mappedActions, mapGetters, mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "Employees",
  data() {
    return {};
  },
  methods: {},

  mounted() {
    this.$store.dispatch("loadEmployees");
  },

  //Vue life cycel methods to start when this component is created
  created() {
    // this.loadEmployees();
  },

  computed: {
    ...mapState(["employees"])
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
