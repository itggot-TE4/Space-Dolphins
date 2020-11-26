import Vue from "vue";
import Vuex from "vuex";
import { Module } from "vuex";
import { v4 as uuid } from "uuid";
import auth from "./modules/auth";
import users from "./modules/users";
// import comment from "./modules/comment";
import logs from "./modules/logs";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    users,
    logs
  },
  state: {
    namespaced: true
  }
});
