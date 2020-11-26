import { Module, mapGetters } from "vuex";
import { User } from "./users";

export interface AuthState {
  error: string;
}

export default {
  state: {
    namespaced: true,
    error: ""
  },
  computed: {
    ...mapGetters("users", ["getUsers"])
  },
  mutations: {
    setLoginError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async authorize(
      { dispatch, commit },
      credentials: { email: string; password: string }
    ) {
      const users: User[] = this.getters.getUsers;
      const user: User | undefined = users.find(
        user =>
          user.email === credentials.email &&
          user.password === credentials.password
      );
      if (user != undefined) {
        dispatch("setUser", user);
      } else {
        commit("setLoginError", "Wrong email or password");
      }
    }
  },
  getters: {
    getLoginError(state) {
      return state.error;
    }
  }
} as Module<AuthState, {}>;
