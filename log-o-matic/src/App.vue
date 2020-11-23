<template>
<<<<<<< HEAD


    <v-toolbar>

      <v-toolbar-title>
        <span>Log-O-Matic</span>
      </v-toolbar-title>

      <v-spacer/>

      <v-btn elevation="0" height="115%" tile color>
        <v-icon>mdi-lock-open</v-icon>
        <span v-if="loginStatus">SIGN IN</span>

        <span v-else>SIGN OUT</span>

      </v-btn>


    </v-toolbar>
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/logs">Logs</router-link>
    </div>
    <router-view />
  </div>
>>>>>>> asdasd
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "header",

  components: {

  },

  data: () => ({
    loginStatus: true

  })
  
});







</script>
