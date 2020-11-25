<template>
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>
          <span>Log-O-Matic</span>
        </v-toolbar-title>

        <v-spacer/>
        
        <router-link to="/">Home</router-link> | 
        <router-link to="/login">Login</router-link> | 
        <router-link to="/logs">Logs</router-link> | 
        <router-link to="/admin">Admin</router-link>

        <v-spacer/>

        <v-btn elevation="0" height="115%" tile color>
          <v-icon>mdi-lock-open</v-icon>
          <span v-if="loginStatus">SIGN OUT</span>
          <span v-else>SIGN IN</span>
        </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Admin from "./components/AllTeachers.vue";
export default Vue.extend({
  name: "App",
  components: {
    Admin
  },
  data(){
    return {
      loginStatus : false
    }
  }
});
</script>
