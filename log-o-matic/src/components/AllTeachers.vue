<template>
  <v-app>
    <div class="sizer">
      <v-card>
        <v-container fluid class="ma-0">
          <v-card-title>Teachers</v-card-title>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="fetchTeachers"
          >
            <template v-slot:[`item.password`]="{ item }">
              <table-row :item="item"></table-row>
            </template>
          </v-data-table>
          <v-divider color="black"></v-divider>
          <v-card-subtitle>Add New Teacher</v-card-subtitle>
          <v-row class="ma-1">
            <v-text-field v-model="newEmail" label="Email"></v-text-field>
            <v-text-field v-model="newName" label="Name"></v-text-field>
            <v-text-field v-model="newPassword" label="Password"></v-text-field>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="create"
              color="green"
              elevation="2"
              class="ma-2 white--text"
              >CREATE</v-btn
            >
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TableRow from "./TableRow.vue";

export default Vue.extend({
  name: "AllTeachers",
  data() {
    return {
      newEmail: "",
      newName: "",
      newPassword: "",
      headers: [
        { text: "Email", value: "email" },
        { text: "Name", value: "name" },
        { text: "Fix password", value: "password" }
      ]
    };
  },

  methods: {
    create() {
      const teacher = {
        name: this.newName,
        email: this.newEmail,
        password: this.newPassword,
        role: "teacher"
      };

      this.$store.commit("addTeacher", teacher);
    }
  },

  computed: {
    fetchTeachers() {
      return this.$store.getters.getTeachers;
    }
  },

  components: {
    TableRow
  }
});
</script>

<style scoped>
.sizer {
  width: 80%;
  height: 90%;
  margin: auto;
}
</style>
