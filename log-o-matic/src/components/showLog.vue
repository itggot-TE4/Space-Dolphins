<template>
  <v-app>
    <v-card width="800px" elevation="1" class="mx-auto my-5">
      <v-card-title class="text-h3">Your Students</v-card-title>
      <v-data-table
        calculate-widths
        :headers="yourStudentsHeaders"
        :items="yourStudentsData"
        hide-default-footer
      >
        <template v-slot:[`item.monday`]="{ item }"> 
            <v-icon large v-if = "item.monday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.monday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.monday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.tuesday`]="{ item }"> 
            <v-icon large v-if = "item.tuesday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.tuesday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.tuesday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.wednesday`]="{ item }"> 
            <v-icon large v-if = "item.wednesday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.wednesday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.wednesday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.thursday`]="{ item }"> 
            <v-icon large v-if = "item.thursday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.thursday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.thursday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.friday`]="{ item }"> 
            <v-icon large v-if = "item.friday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.friday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.friday.data }} </span>
              </template>
              <v-icon large >mdi-check</v-icon>
            </v-badge>
        </template> 
      </v-data-table>
    </v-card>
    <v-divider></v-divider>
    <v-card width="800px" class="mx-auto my-5">
      <v-card-title class="text-h3">Other Students</v-card-title>
      <v-data-table
        :headers="otherStudentsHeaders"
        :items="otherStudentsData"
        calculate-widths
        hide-default-footer
        class="elevation-1"
        >
        <template v-slot:[`item.monday`]="{ item }"> 
            <v-icon large v-if = "item.monday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.monday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.monday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.tuesday`]="{ item }"> 
            <v-icon large v-if = "item.tuesday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.tuesday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.tuesday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.wednesday`]="{ item }"> 
            <v-icon large v-if = "item.wednesday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.wednesday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.wednesday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.thursday`]="{ item }"> 
            <v-icon large v-if = "item.thursday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.thursday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.thursday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.friday`]="{ item }"> 
            <v-icon large v-if = "item.friday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.friday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.friday.data }} </span>
              </template>
              <v-icon large >mdi-check</v-icon>
            </v-badge>
        </template> 
      </v-data-table>
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
          id: 1,
          monday: {status: false, data: null},
          tuesday: {status: true, data: 0},
          wednesday: {status: true, data: 3},
          thursday: {status: false, data: null},
          friday: {status: true, data: 0}
        },
        {
          name: "Dennis",
          id: 2,
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "Filip",
          id:3,
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "Gomezzzz",
          id: 4,
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
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
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "Rasmus",
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "David",
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "Jacob",
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "Adrian",
         monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "André",
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        },
        {
          name: "Kjellberg1",
          monday: {status: true, data: 2},
          tuesday: {status: false, data: null},
          wednesday: {status: true, data: 1},
          thursday: {status: true, data: 0},
          friday: {status: false, data: null}
        }
      ]
    };
  }
});
</script>

   