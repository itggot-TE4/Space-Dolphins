<template>
  <v-app>
    <div class="sizer">
      <v-card>
        <v-container fluid class="ma-0">
          <v-card-title>Students</v-card-title>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="fetchStudents"
          >
            <template v-slot:[`item.teacher`]="{ item }">
              <teacher-set-row
                :fetchTeachers="fetchTeachers"
                :item="item"
              ></teacher-set-row>
            </template>
            <template v-slot:[`item.password`]="{ item }">
              <table-row :item="item"></table-row>
            </template>
          </v-data-table>
          <v-divider color="black"></v-divider>
          <v-card-subtitle>Add New Student</v-card-subtitle>
          <v-row class="ma-1">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-select
              :items="fetchTeachers"
              item-text="name"
              item-value="id"
              v-model="teacher"
              label="Teacher"
            ></v-select>
            <v-text-field v-model="password" label="Password"></v-text-field>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              v-on:click="newstudent()"
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
import TeacherSetRow from "./TeacherSetRow.vue";
import { User } from "@/store/modules/users"

export default Vue.extend({
  name: "AllStudents",
  data() {
    return {
      email: "",
      name: "",
      teacher: "",
      password: "",
      headers: [
        { text: "Email", value: "email" },
        { text: "Name", value: "name" },
        { text: "Teacher", value: "teacher" },
        { text: "Fix password", value: "password" }
      ]
    };
  },

  methods: {
    newpassword: function(payload: Record<string, string | {}>) {
      this.$store.commit("updatePassword", payload);
    },

    updateteacher: function(item: {}, e: Event) {
      console.log(item);
      console.log(e);
    },

    newstudent: function() {
      const student = {
        name: this.name,
        email: this.email,
        teacherId: this.teacher,
        password: this.password,
        role: "student"
      };

      this.$store.commit("addStudent", student);
    }
  },

  computed: {
    fetchStudents() : User[]{
      return this.$store.getters.getStudents;
    },

    fetchTeachers() : User[]{
      return this.$store.getters.getTeachers;
    }
  },

  components: {
    TableRow,
    TeacherSetRow
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
