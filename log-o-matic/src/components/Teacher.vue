<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ name }}
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ email }}
        </v-card>
      </v-col>
      <v-col order="first">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Teacher",
  props: ["name", "email"],
});
</script>

<style scoped></style>