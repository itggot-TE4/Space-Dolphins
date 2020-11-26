<template>
  <ShowLogs />
</template>

<script lang="ts">
import Vue from "vue";
import ShowLogs from "@/components/ShowLog.vue";
export default Vue.extend({
  name: "ViewLogs",
  components: { ShowLogs }
});
</script>
