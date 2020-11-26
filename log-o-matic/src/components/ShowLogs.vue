<template>
  <v-container>
    <StudentTable :title="'Your Students'" :data="yourStudentsData" />
    <v-divider></v-divider>
    <StudentTable :title="'Other Students'" :data="otherStudentsData" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import StudentTable from "./StudentTable.vue";

export default Vue.extend({
  name: "ShowLogs",
  components: {
    StudentTable
  },
  data() {
    return {
      yourStudentsData: [
        {
          name: "Jonathan Ronsten",
          id: 1,
          monday: { status: false, data: null },
          tuesday: { status: true, data: 0 },
          wednesday: { status: true, data: 3 },
          thursday: { status: false, data: null },
          friday: { status: true, data: 0 }
        },
        {
          name: "Dennis",
          id: 2,
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "Filip",
          id: 3,
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "Gomezzzz",
          id: 4,
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        }
      ],
      otherStudentsData: [
        {
          name: "Alexander Kjellberg",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "Rasmus",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "David",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "Jacob",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "Adrian",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "André",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        },
        {
          name: "Kjellberg1",
          monday: { status: true, data: 2 },
          tuesday: { status: false, data: null },
          wednesday: { status: true, data: 1 },
          thursday: { status: true, data: 0 },
          friday: { status: false, data: null }
        }
      ]
    };
  }
});
</script>
