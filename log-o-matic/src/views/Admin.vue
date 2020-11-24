<template>
  <div>
    <AllTeachers />
    <AllStudents />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AllTeachers from "@/components/AllTeachers.vue"; // @ is an alias to /src
import AllStudents from "@/components/AllStudents.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Admin",
  components: {
    AllTeachers,
    AllStudents
  }
});
</script>
