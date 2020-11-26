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
              <v-row class="justify-center align-end mb-5">
                <v-text-field
                  v-model="item.password"
                  placeholder="Password"
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
          </v-data-table>
          <v-divider color="black"></v-divider>
          <v-card-subtitle>Add New Teacher</v-card-subtitle>
          <v-row class="ma-1">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="password" label="Password"></v-text-field>
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
import Teacher from "./Teacher.vue";
import uuid from "uuid";

export default Vue.extend({
  name: "AllTeachers",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      headers: [
        { text: "Email", value: "email" },
        { text: "Name", value: "name" },
        { text: "Fix password", value: "password" }
      ]
    };
  },

  methods: {
    newpassword: function(payload: Record<string, any>) {
      this.$store.commit("updatePassword", payload);
    },

    create: function() {
      const teacher = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: "teacher"
      };
      this.$store.commit("addTeacher", teacher);
    }
  },

  computed: {
    fetchTeachers() {
      const teachers: { password: string }[] = this.$store.getters.getTeachers;
      console.log(teachers);

      teachers.forEach(teacher => {
        teacher.password = "";
      });

      return teachers;
    }
  },

  components: {
    // Teacher
  }
});
</script>

<style scoped>
.sizer {
  width: 90%;
  height: 90%;
  margin: auto;
}
</style>
