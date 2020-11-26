<template>
    <v-app>
      <Header/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Admin from "./components/AllTeachers.vue";
import users from './store/modules/users';
import Header from "./components/Header.vue";
export default Vue.extend({
  name: "App",
  components: {
    Admin,
    Header

  },
  data(){
    return {
      
    }
  }
});
</script>