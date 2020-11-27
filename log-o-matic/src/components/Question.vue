<template>
  <v-textarea :label="newQuestion.q" :value="newQuestion.a"></v-textarea>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Question",
  props: ["newQuestion"]
});
</script>
