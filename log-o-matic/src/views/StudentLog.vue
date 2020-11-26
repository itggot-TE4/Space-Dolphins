<template>
  <div>
    <h2 class="mx-auto d-flex align-center justify-center">
      {{ getAllLogs[0].name }} {{ getAllLogs[0].log[0].day }}
      {{ getAllLogs[0].log[0].week }}
    </h2>
    <LogTemplateStudent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LogTemplateStudent from "@/components/LogTemplateStudent.vue";
import Vuex from "vuex";
import { mapGetters } from "vuex";
import Store from "@/store";
export default Vue.extend({
  name: "ShowStudentLog",
  props: ["Log"],
  components: { LogTemplateStudent },
  computed: {
    getAllLogs() {
      return Store.getters.getLogs;
    }
  }
});
</script>
