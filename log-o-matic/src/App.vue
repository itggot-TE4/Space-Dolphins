<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Admin from "./components/AllTeachers.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Admin
  },

  data: () => ({
    //
  })
});
</script>
