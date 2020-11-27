<template>
  <v-timeline-item>
    <v-card class="elevation-2">
      <v-card-text>
        {{ oneComment.data }}
      </v-card-text>
    </v-card>
    <span slot="opposite"> {{ oneComment.name }} </span>
  </v-timeline-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Timeline",
  props: ["oneComment"]
});
</script>
