<template>
  <v-row class="justify-center align-end mb-0">
    <v-select
      v-model="teacherId"
      class="mb-0"
      :items="fetchTeachers"
      item-text="name"
      item-value="id"
      :label="fetchTeachers.find(teacher => teacher.id == item.teacherId).name"
      v-on:change="setNewTeacher(item)"
    ></v-select>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TeacherSetRow",
  props: ["item", "fetchTeachers"],

  data() {
    return {
      teacherId: ""
    };
  },

  methods: {
    setNewTeacher: function(student: {}) {
      this.$store.commit("setNewTeacher", {
        student: student,
        teacher: this.teacherId
      });
    }
  }
});
</script>
