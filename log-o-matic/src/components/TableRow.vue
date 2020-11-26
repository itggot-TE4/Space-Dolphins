<template>
  <v-row class="justify-center align-end mb-5">
    <v-text-field
      v-model="password"
      :placeholder="'password'"
      class="ma-0"
      hide-details="auto"
    ></v-text-field>
    <v-btn
      color="blue"
      class="white--text rounded-0"
      small
      v-on:click="newpassword(item)"
      >RESET</v-btn
    >
  </v-row>
</template>

<script>
export default {
  name: "TableRow",
  props: ["item"],

  data() {
    return {
      password: ""
    };
  },
  methods: {
    newpassword(item) {
      const teacher = { user: item, newpassword: this.password };
      this.$store.commit("updatePassword", teacher);
    }
  }
};
</script>

<style></style>
