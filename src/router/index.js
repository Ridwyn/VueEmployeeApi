import Vue from "vue";
import Router from "vue-router";
import HOME from "@/components/HOME";
import Employees from "@/components/Employees";
import ViewEmployee from "@/components/ViewEmployee";
import AddEmployee from "@/components/AddEmployee";
import EditEmployee from "@/components/EditEmployee";

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
    },
    {
      path: "/add",
      name: "AddEmployee",
      component: AddEmployee
    },
    {
      path: "/view/:employee_id",
      name: "ViewEmployee",
      component: ViewEmployee
    },
    {
      path: "/edit/:employee_id",
      name: "EditEmployee",
      component: EditEmployee
    }
  ]
});
