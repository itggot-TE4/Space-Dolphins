<template>
  <v-container
    style="
      width: 700px;
      heigth: 500px;
      margin-top: 50px;"
  >
    <LoginForm />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LoginForm from "@/components/LoginForm.vue";

export default Vue.extend({
  name: "Home",
  components: {
    LoginForm
  }
});
</script>
