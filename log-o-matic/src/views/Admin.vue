<template>
    <!-- <h1>clone a willy</h1> -->
    <AllTeachers/>
</template>

<script lang="ts">
import Vue from "vue";
import AllTeachers from "@/components/AllTeachers.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Admin",
  components: {
    AllTeachers
  }
});
</script>
