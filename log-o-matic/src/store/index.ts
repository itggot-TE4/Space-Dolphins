import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
// import comment from "./modules/comment";
import logs from "./modules/logs";

Vue.use(Vuex);

export default new Vuex.Store<{}>({
  strict: true,
  modules: {
    auth,
    users,
    logs
  },
  state: {
    // namespaced: true
  }
});
