import Vue from "vue";
import { Module, mapGetters } from "vuex";
import { User } from "./users";

export interface AuthState {
  failure: string;
}

export default {
  state: {
    namespaced: true,
    failure: ""
  },
  computed: {
    ...mapGetters("users", ["getUsers"])
  },
  actions: {
    async authorize(
      { dispatch },
      credentials: { email: string; password: string }
    ) {
      try {
        const users: User[] = this.getters.getUsers;
        const user: User | undefined = users.find(
          user =>
            user.email === credentials.email &&
            user.password === credentials.password
        );
        if (user != undefined) {
          dispatch("setUser", user);
        } else {
          throw "Account not found";
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
} as Module<AuthState, {}>;
