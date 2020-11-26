<template>
  <v-container>
    <StudentLogs />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import StudentLogs from "@/components/StudentLogs.vue";

export default Vue.extend({
  name: "Student",
  components: {
    StudentLogs
  }
});
</script>
