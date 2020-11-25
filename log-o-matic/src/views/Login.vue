<template>
  <v-container
    style="
      width: 700px;
      heigth: 500px;
      margin-top: 50px;"
  >
    <v-card elevation="2">
      <v-card-title class="text-h3 ma-2">Sign In</v-card-title>
      <v-card-actions class="ma-4">
        <v-icon large class="mr-3">mdi-account-circle</v-icon>
        <v-text-field
          type="text"
          name="email"
          v-model="email"
          placeholder="Email"
          class="text-h5"
        >
          <template v-slot:append>
            <v-icon class="white--text grey darken-1 rounded ma-4"
              >mdi-lastpass</v-icon
            >
          </template>
        </v-text-field>
      </v-card-actions>
      <v-card-actions class="ma-4">
        <v-icon large class="mr-3">mdi-lock</v-icon>
        <v-text-field
          name="password"
          v-model="password"
          placeholder="Password"
          class="text-h5"
          :type="showPassword ? 'text' : 'password'"
        >
          <template v-slot:append>
            <v-icon class="white--text grey darken-1 rounded ma-4"
              >mdi-lastpass</v-icon
            >
            <v-icon
              v-if="!showPassword"
              large
              @click="showPassword = !showPassword"
              >mdi-eye-off</v-icon
            >
            <v-icon
              v-if="showPassword"
              large
              @click="showPassword = !showPassword"
              >mdi-eye</v-icon
            >
          </template>
        </v-text-field>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="login()" color="success" class="text-h6 py-6 px-3 ma-2"
          >SIGN IN</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },
  computed: {
    ...mapGetters("users", ["getCurrentUser"])
  },
  methods: {
    async login() {
      await this.$store.dispatch("authorize", {
        email: this.email,
        password: this.password
      });
      if (this.$store.getters.getCurrentUserRole != "guest") {
        this.$router.push("/logs");
      }
    }
  }
});
</script>
