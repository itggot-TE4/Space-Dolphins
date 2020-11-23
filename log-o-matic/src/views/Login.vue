<template>
  <div class="login">
    <input type="text" name="email" v-model="email">
    <input type="password" name="password" v-model="password">
    <button @onClick="login()">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
name: "Home",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login(){
      console.log(123)
    }
  }
});
</script>
