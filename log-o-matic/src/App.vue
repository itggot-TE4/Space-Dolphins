<template>

    <v-app>
      <v-app-bar app>
        <v-toolbar-title>
          <span>Log-O-Matic</span>
        </v-toolbar-title>

        <v-container>
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
        </v-container>

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

export default Vue.extend({
  name: "Layout",
  data(){
    return {
      loginStatus : false
    }
  }
});


