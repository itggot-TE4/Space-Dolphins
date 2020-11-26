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
              <v-row class="justify-center align-end mb-0">
                <v-select
                  class="mb-0"
                  :items="fetchTeachers"
                  item-text="name"
                  item-value="email"
                  :label="
                    fetchTeachers.find(teacher => (teacher.id = item.teacherId))
                      .name
                  "
                  v-on:change="updateteacher(item, $event)"
                ></v-select>
              </v-row>
            </template>
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
          <v-card-subtitle>Add New Student</v-card-subtitle>
          <v-row class="ma-1">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-select
              :items="fetchTeachers"
              item-text="name"
              item-value="email"
              v-model="teacher"
              label="Teacher"
              v-on:change="setNewTeacher(item)"
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
    newpassword: function(payload: Record<string, any>) {
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
    },

    setNewTeacher: function(student: any) {
      console.log(this.teacher);
      console.log(student);
    }
  },

  computed: {
    fetchStudents() {
      const students: { password: string }[] = this.$store.getters.getStudents;

      students.forEach(student => {
        student.password = "";
      });

      console.log(students);
      return students;
    },

    fetchTeachers() {
      return this.$store.getters.getTeachers;
    }
  },

  components: {}
});
</script>

<style scoped>
.sizer {
  width: 90%;
  height: 90%;
  margin: auto;
}
</style>
