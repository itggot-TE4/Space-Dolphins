import Vue from "vue";
import { Module, mapGetters } from "vuex";
import { User } from "./users";

export interface AuthState {
  failure: string;
}

export default {
  namespaced: true,
  computed: {
    ...mapGetters("users", ["getUsers"])
  },
  actions: {
    async authorize(
      { commit, dispatch, getters }: any,
      credentials: { email: string; password: string }
    ) {
      try {
        const users: User[] = this.getters.getUsers;
        // if(users.find(user => user.email === credentials.email && user.password === credentials.password)) {

        // }

        console.log(
          users.find(
            user =>
              user.email === credentials.email &&
              user.password === credentials.password
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
} as Module<AuthState, {}>;
