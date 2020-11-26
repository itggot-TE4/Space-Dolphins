<template>
  <v-app-bar app>
    <v-toolbar-title>
      <router-link to="/"
        ><span class="black--text">Log-O-Matic</span></router-link
      >
    </v-toolbar-title>

    <v-spacer />

    <v-btn elevation="0" height="115%" tile v-if="userRole == 'admin'">
      <router-link to="/admin" class="black--text">
        <v-icon>mdi-cog</v-icon>
        <span> ADMIN</span>
      </router-link>
    </v-btn>

    <v-btn
      elevation="0"
      height="115%"
      tile
      v-if="userRole == 'admin' || userRole == 'teacher'"
    >
      <router-link to="/logs" class="black--text">
        <v-icon>mdi-format-list-bulleted</v-icon>
        <span> LOGS</span>
      </router-link>
    </v-btn>

    <v-btn
      elevation="0"
      height="115%"
      tile
      v-if="userRole != 'guest'"
      @click="logOut"
    >
      <router-link to="/" class="black--text">
        <v-icon>mdi-lock-open</v-icon>
        <span> SIGN OUT</span>
      </router-link>
    </v-btn>

    <v-btn elevation="0" height="115%" tile v-else>
      <router-link to="/login" class="black--text">
        <v-icon>mdi-lock-open</v-icon>
        <span> SIGN IN</span>
      </router-link>
    </v-btn>
  </v-app-bar>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  computed: {
    userRole() {
      return this.$store.getters.getCurrentUserRole;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("setUser", { role: "guest", name: "guest" });
      this.$router.push("/");
    }
  }
});
</script>
