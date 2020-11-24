import Vue from "vue";
import Vuex from "vuex";
import { Module } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teachers: {
      1: { email: "daniel.berg@ga.ntig.se", name: "Daniel Berg", password: "" },
      2: { email: "daniel.berg@ga.ntig.se", name: "Del Berg", password: "" },
      3: { email: "daniel.berg@ga.ntig.se", name: "Kaktus Berg", password: "" },
      4: { email: "daniel.berg@ga.ntig.se", name: "Ananas Berg", password: "" }
    },
    user: {
      id: 1
    },
    
    students: {
      1: { name: "Kalle", teacherId: 3, password: "", email: "abc@gmail.com" },
      2: { name: "Kalle", teacherId: 1, password: "", email: "abc@gmail.com" },
      3: { name: "Kalle", teacherId: 2, password: "", email: "abc@gmail.com" },
      4: { name: "Kalle", teacherId: 2, password: "", email: "abc@gmail.com" },
      5: { name: "Kalle", teacherId: 4, password: "", email: "abc@gmail.com" }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    teachers(state) {
      return state.teachers;
    },

    students(state) {
      return state.students;
    }
  }
});
