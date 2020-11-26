<template>
  <div>
    <h2 class="mx-auto d-flex align-center justify-center">
      {{ getAllLogs[0].name }} {{ getAllLogs[0].log[0].day }}
      {{ getAllLogs[0].log[0].week }}
    </h2>
    <LogTemplateTeacher :oneLog="getAllLogs[0].log[0]" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LogTemplateTeacher from "@/components/LogTemplateTeacher.vue";
import Store from "@/store";
export default Vue.extend({
  name: "ShowOnlyOneLog",
  components: { LogTemplateTeacher },
  computed: {
    getAllLogs() {
      return Store.getters.getLogs;
    }
  }
});
</script>
