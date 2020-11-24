<template>


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
