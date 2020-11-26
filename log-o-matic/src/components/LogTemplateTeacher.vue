<template>
  <div>
    <v-container fluid style="width: 800px">
      <v-card>
        <Question
          v-for="question in oneLog.questions"
          :key="question.q"
          :newQuestion="question"
        />
        <v-timeline>
          Comments
          <Timeline
            v-for="oneComment in oneLog.comments"
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
import Question from "./Question.vue";
import Store from "@/store";
export default Vue.extend({
  name: "LogTemplateTeacher",
  props: ["oneLog"],
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
      return Store.getters.getCurrentUserRole;
    },
    allComments() {
      return Store.getters.allComments;
    },
    currentUser() {
      return Store.getters.getCurrentUser;
    }
  },
  components: { Timeline, Question },
  methods: {
    saveComment() {
      this.newComment = {
        name: this.$store.getters.getCurrentUser.name,
        data: this.comment,
        log: this.oneLog
      };
      this.$store.dispatch("addComments", this.newComment);
    }
  }
});
</script>
