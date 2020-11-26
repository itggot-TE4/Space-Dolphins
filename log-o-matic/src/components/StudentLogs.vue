<template>
  <StudentTable :title="'Your Logs'" :data="yourData" />
</template>

<script lang="ts">
import Vue from "vue";
import StudentTable from "./StudentTable.vue";

export default Vue.extend({
  name: "StudentLogs",
  components: {
    StudentTable
  },
  data() {
    return {
      yourData: [
        {
          name: "You",
          id: 1,
          monday: { status: false, data: null },
          tuesday: { status: true, data: 0 },
          wednesday: { status: true, data: 3 },
          thursday: { status: false, data: null },
          friday: { status: true, data: 0 }
        }
      ]
    };
  },
  computed: {}
});
</script>
