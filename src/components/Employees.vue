<template>
  <div class="container">
    <h1 class="center">Employees page</h1>
    <div class="row">
      <div
        class="col-xs-9 col-sm-6 col-md-6 col-lg-4 my-3 px-1 mx-auto"
        v-for="(employee,index) in employees"
        :key="index"
      >
        <div class="card mx-auto" style="width: 18rem;">
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
            <p v-if="employee.created_on.length>8" class="card-text">
              <strong>ID:</strong>
              {{employee._id.substring(0,8)}}
            </p>
            <p v-if="employee.created_on.length>11" class="card-text">
              <strong>Joined on:</strong>
              {{employee.created_on.substring(0,11)}}
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
.card {
  background-color: #7c7c7c;
  color: #080c20;
}
</style>
