<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "logsTemplate",
  data() {
    return {
      headers: [
        {
          text: "Student",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Monday", value: "monday" },
        { text: "Tuesday", value: "tuesday" },
        { text: "Wednesday", value: "wednesday" },
        { text: "Thursday", value: "thursday" },
        { text: "Friday", value: "friday" }
      ],
      data: [
        {
          name: "Jonathan Ronsten",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Dennis",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Filip",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        },
        {
          name: "Gomezzzz",
          monday: "good",
          tuesday: "bad",
          wednesday: "good",
          thursday: "bad",
          friday: "good"
        }
      ]
    };
  }
});
</script>
