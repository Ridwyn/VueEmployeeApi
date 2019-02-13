import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
  strict: true,
  state: {
    count: 1,
    employees: [
      // { id: 1, name: "Banana Skin", price: 20 },
      // { id: 2, name: "Shiny Star", price: 50 },
      // { id: 3, name: "Green Shells ", price: 60 },
      // { id: 4, name: "Blue Shells", price: 70 }
    ]
  },
  getters: {
    employees: state => state.employees,
    count: state => state.count
  },
  actions: {
    loadEmployees({ commit }) {
      console.log("loademployees");

      axios
        .get("https://flaskemployeeapi.herokuapp.com/api/employees")
        .then(response => {
          console.log(response.data);
          let employees = response.data;
          commit("SET_EMPLOYEES", employees);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    SET_EMPLOYEES(state, employees) {
      state.employees = employees;
    }
  }
});

let employee = {
  id: 1,
  firstname: "Freed",
  lastname: "Jackson",
  role: "Senior front-end"
};

store.commit("SET_EMPLOYEES", employee);
export default store;
