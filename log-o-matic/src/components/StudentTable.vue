<template>
  <v-card width="800px" elevation="1" class="mx-auto my-5">
    <v-card-title class="text-h3">{{ title }}</v-card-title>
    <v-data-table
      calculate-widths
      :headers="headers"
      :items="data"
      hide-default-footer
      disable-sort
    >
      <template v-slot:[`item.name`]="{ item }">
        <div @click="showLogsForOneStudent" class="ma-auto">
          {{ item.name }}
        </div>
      </template>
      <template v-slot:[`header.monday`]="{}">
        <p @click="showLogsForOneDay">Monday</p>
      </template>

      <template v-slot:[`header.tuesday`]="{}">
        <p @click="showLogsForOneDay">Tuesday</p>
      </template>

      <template v-slot:[`header.wednesday`]="{}">
        <p @click="showLogsForOneDay">Wednesday</p>
      </template>

      <template v-slot:[`header.thursday`]="{}">
        <p @click="showLogsForOneDay">Thursday</p>
      </template>

      <template v-slot:[`header.friday`]="{}">
        <p @click="showLogsForOneDay">Friday</p>
      </template>

      <template v-slot:[`item.monday`]="{ item }">
        <v-icon large v-if="item.monday.data == null" color="warning"
          >mdi-alert-circle</v-icon
        >
        <div v-else @click="showOnlyOneLog">
          <v-icon large v-if="item.monday.data == 0" color="primary"
            >mdi-check</v-icon
          >
          <v-badge v-else>
            <template v-slot:badge>
              <span>{{ item.monday.data }} </span>
            </template>
            <v-icon large>mdi-check</v-icon>
          </v-badge>
        </div>
      </template>
      <template v-slot:[`item.tuesday`]="{ item }">
        <v-icon large v-if="item.tuesday.data == null" color="warning"
          >mdi-alert-circle</v-icon
        >
        <div v-else @click="showOnlyOneLog">
          <v-icon large v-if="item.tuesday.data == 0" color="primary"
            >mdi-check</v-icon
          >
          <v-badge v-else>
            <template v-slot:badge>
              <span>{{ item.tuesday.data }} </span>
            </template>
            <v-icon large>mdi-check</v-icon>
          </v-badge>
        </div>
      </template>
      <template v-slot:[`item.wednesday`]="{ item }">
        <v-icon large v-if="item.wednesday.data == null" color="warning"
          >mdi-alert-circle</v-icon
        >
        <div v-else @click="showOnlyOneLog">
          <v-icon large v-if="item.wednesday.data == 0" color="primary"
            >mdi-check</v-icon
          >
          <v-badge v-else>
            <template v-slot:badge>
              <span>{{ item.wednesday.data }} </span>
            </template>
            <v-icon large>mdi-check</v-icon>
          </v-badge>
        </div>
      </template>
      <template v-slot:[`item.thursday`]="{ item }">
        <v-icon large v-if="item.thursday.data == null" color="warning"
          >mdi-alert-circle</v-icon
        >
        <div v-else @click="showOnlyOneLog">
          <v-icon large v-if="item.thursday.data == 0" color="primary"
            >mdi-check</v-icon
          >
          <v-badge v-else>
            <template v-slot:badge>
              <span>{{ item.thursday.data }} </span>
            </template>
            <v-icon large>mdi-check</v-icon>
          </v-badge>
        </div>
      </template>
      <template v-slot:[`item.friday`]="{ item }">
        <v-icon large v-if="item.friday.data == null" color="warning"
          >mdi-alert-circle</v-icon
        >
        <div v-else @click="showOnlyOneLog">
          <v-icon large v-if="item.friday.data == 0" color="primary"
            >mdi-check</v-icon
          >
          <v-badge v-else>
            <template v-slot:badge>
              <span>{{ item.friday.data }} </span>
            </template>
            <v-icon large>mdi-check</v-icon>
          </v-badge>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "StudentTable",
  props: ["title", "data"],
  data() {
    return {
      headers: [
        {
          text: "Students",
          align: "start",
          value: "name"
        },
        { text: "Monday", value: "monday" },
        { text: "Tuesday", value: "tuesday" },
        { text: "Wednesday", value: "wednesday" },
        { text: "Thursday", value: "thursday" },
        { text: "Friday", value: "friday" }
      ]
    };
  },
  methods: {
    showOnlyOneLog() {
      this.$router.push("/showonlyonelog");
    },
    showLogsForOneStudent() {
      this.$router.push("/showlogsforonestudent");
    },
    
    showLogsForOneDay() {
      this.$router.push("/showlogsforoneday");
    }
  }
});
</script>
