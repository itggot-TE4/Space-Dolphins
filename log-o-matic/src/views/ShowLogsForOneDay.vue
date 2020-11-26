<template>
  <div>
    <v-card class="mx-auto mt-8 text-center" width="300px">
      <h2>{{ getAllLogs[0].logs[1].day }} {{ getAllLogs[0].logs[2].week }}</h2>
      <div class="mx-auto align-center justify-center mt-8 text-center">
        <v-radio-group @change="Switch()" row v-model="OneOrAll">
          <v-radio active value="One" label="One at a Time"></v-radio>
          <v-radio value="All" label="All att Once"></v-radio>
        </v-radio-group>
      </div>
      <div>
        <v-icon>mdi-less-than</v-icon>
        <span>{{ getAllLogs[0].name }}</span>
        <v-icon>mdi-greater-than</v-icon>
      </div>
    </v-card>
    <LogTemplateTeacher :oneLog="getAllLogs[0].logs[2]" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LogTemplateTeacher from "@/components/LogTemplateTeacher.vue";
export default Vue.extend({
  name: "ShowLogsForOneDay",
  components: { LogTemplateTeacher },
  computed: {
    getAllLogs() {
      return this.$store.getters.getLogs;
    }
  },
  data() {
    return {
      OneOrAll: "One"
    };
  },
  methods: {
    Switch() {
      console.log(this.OneOrAll);
    }
  }
});
</script>
