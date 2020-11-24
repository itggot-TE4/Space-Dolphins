import Vue from "vue";
import Vuex from "vuex";
import { Module } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teachers: {
      1: {email: 'daniel.berg@ga.ntig.se', name: 'Daniel Berg', password: ""},
      2: {email: 'daniel.berg@ga.ntig.se', name: 'Daniel Berg', password: ""},
      3: {email: 'daniel.berg@ga.ntig.se', name: 'Daniel Berg', password: ""},
      4: {email: 'daniel.berg@ga.ntig.se', name: 'Daniel Berg', password: ""},
    },
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    teachers(state){
      return state.teachers
    }
  }
});