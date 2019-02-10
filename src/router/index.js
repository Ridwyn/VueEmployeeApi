import Vue from "vue";
import Router from "vue-router";
import HOME from "@/components/HOME";
import Employees from "@/components/Employees";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HOME
    },
    {
      path: "/employees",
      name: "Employees",
      component: Employees
    }
  ]
});
