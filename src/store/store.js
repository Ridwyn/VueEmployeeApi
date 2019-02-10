import Vue from "vue";
import Vuex from "vuex";
import vueResource from "vue-resource";

Vue.use(Vuex);
Vue.use(vueResource);

export const store = new Vuex.Store({
  strict: true,
  state: {
    employee: {},
    employees: [
      //   { id: 1, name: "Banana Skin", price: 20 },
      //   { id: 2, name: "Shiny Star", price: 50 },
      //   { id: 3, name: "Green Shells ", price: 60 },
      //   { id: 4, name: "Blue Shells", price: 70 }
    ]
  },
  getters: {
    employees: state => state.employees,
    employee: state => state.employee
  }
  //   actions:{
  //       loadEmployees({commit}){
  //         this.$http.get('https://flaskemployeeapi.herokuapp.com/api/employees')
  //         .then(response => response)
  //         .then(employees =>{
  //             commit('SET_EMPLOYEES', employees)
  //         })
  //       }
  //   },
  //   mutations:{
  //       SET_EMPLOYEES (state,employees){
  //           state.employees =employees
  //       }
  //   }
});

export default store;
