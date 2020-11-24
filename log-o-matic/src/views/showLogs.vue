<template>
  <v-app>
    <v-card width="1000px" class="mx-auto my-5">
      <v-card-title class="text-h3">Your Students</v-card-title>
      <v-data-table
        calculate-widths
        :headers="yourStudentsHeaders"
        :items="yourStudentsData"
        hide-default-footer
        class="elevation-1"
      >
        <template v-slot:[`item.monday`]="{}">
          <v-row>
            <v-icon
              class="mx-auto ml-5 white--text orange lighten-2 rounded-circle"
            >
              mdi-exclamation
            </v-icon>
          </v-row>
        </template>
        <template v-slot:[`item.wednesday`]="{}">
          <v-icon class="">
            mdi-check
          </v-icon>
        </template>
        <template v-slot:[`item.friday`]="{}">
          <v-icon class="blue--text">
            mdi-check
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <v-divider></v-divider>
    <v-card width="1000px" class="mx-auto my-5">
      <v-card-title class="text-h3">Other Students</v-card-title>
      <v-data-table
        :headers="otherStudentsHeaders"
        :items="otherStudentsData"
        calculate-widths
        hide-default-footer
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Logs",
  data() {
    return {
      yourStudentsHeaders: [
        {
          text: "Students",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Monday", value: "monday" },
        { text: "Tuesday", value: "tuesday" },
        { text: "Wednesday", value: "wednesday" },
        { text: "Thursday", value: "thursday" },
        { text: "Friday", value: "friday" }
      ],
      yourStudentsData: [
        {
          name: "Jonathan Ronsten",
          monday: "good",
          tuesday: "bad",
          wednesday: "notAwnserd",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Dennis",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Filip",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Gomezzzz",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        }
      ],
      otherStudentsHeaders: [
        {
          text: "Student",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Monday", value: "monday" },
        { text: "Tuesday", value: "tuesday" },
        { text: "Wednesday", value: "wednesday" },
        { text: "Thursday", value: "thursday" },
        { text: "Friday", value: "friday" }
      ],
      otherStudentsData: [
        {
          name: "Alexander Kjellberg",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Rasmus",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "David",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Jacob",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Adrian",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "André",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Kjellberg1",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        }
      ]
    };
  }
});
</script>
