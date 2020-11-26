<template>
  <div>
    <v-container fluid style="width: 800px">
      <v-card>
        <v-textarea
          label="Vad har du gjort under dagen?"
          v-model="first"
        ></v-textarea>
        <v-textarea label="Vad har du lärt dig?" v-model="second"></v-textarea>
        <v-textarea
          label="Vad förstod du inte / Vilka frågor har du inte fått svar på?"
          v-model="third"
        ></v-textarea>
        <v-textarea
          label="Vad vill du lära dig mer om?"
          v-model="fourth"
        ></v-textarea>
        <v-btn
          v-if="currentUserRole === 'guest'"
          v-on:click="saveLog"
          color="success"
          class="text-h6 py-6 px-3 ma-2"
          >Save</v-btn
        >
        <v-timeline>
          Comments
          <Timeline
            v-for="oneComment in allComments"
            :key="oneComment.data"
            :oneComment="oneComment"
          />
        </v-timeline>
        <v-textarea filled label="comment" v-model="comment"></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-on:click="saveComment"
            color="success"
            class="text-h6 py-6 px-3 ma-2"
            >Send Comment</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Vuex from "vuex";
import Timeline from "./Timeline.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  name: "LogTemplateOneDay",
  data() {
    return {
      first: "",
      second: "",
      third: "",
      fourth: "",
      comment: "",
      newComment: {},
      currentUserName: ""
    };
  },
  computed: {
    /*
        ...mapGetters('users', ['getCurrentUserRole']),
        ...mapGetters('comment', ['allComments'])' */
    currentUserRole() {
      return this.$store.getters.getCurrentUserRole;
    },
    allComments() {
      return this.$store.getters.allComments;
    },
    currentUser() {
      return this.$store.getters.getCurrentUser;
    }
  },
  components: { Timeline },
  methods: {
    saveLog() {
      console.log(this.first);
      console.log(this.second);
      console.log(this.third);
      console.log(this.fourth);
    },
    saveComment() {
      this.newComment = {
        name: this.$store.getters.getCurrentUser.name,
        data: this.comment
      };
      this.$store.dispatch("addComments", this.newComment);
    }
  }
});
</script>
