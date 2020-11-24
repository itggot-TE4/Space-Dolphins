<template>
    <v-app>
        <div class="sizer">
            <v-card>
            <v-container fluid class="ma-0">
                <v-card-title>Students</v-card-title>
                <v-data-table
                    hide-default-footer
                    :headers="headers"
                    :items="students">
                    <template v-slot:[`item.teacher`]="{ item }">
                        <v-row class="justify-center align-end mb-0">
                            <v-select 
                            class="mb-0"
                            :items="arrteachers"
                            item-text="name"
                            :label="teachers[item.teacher_id].name"
                            v-on:change="newteacher(item, $event)" 
                            ></v-select>
                        </v-row>
                    </template>
                    <template v-slot:[`item.password`]="{ item }">
                        <v-row class="justify-center align-end mb-5">

                        <v-text-field
                            v-model="item.password"
                            placeholder="Password"
                            class="ma-0"
                            hide-details="auto"
                        ></v-text-field>
                        <v-btn color="blue" class="white--text rounded-0" small v-on:click="newpassword(item)">RESET</v-btn>
                        </v-row>
                    </template>
                </v-data-table>
                <v-divider color="black"></v-divider>
                <v-card-subtitle>Add New Student</v-card-subtitle>
                <v-row class="ma-1">
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Password"></v-text-field>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green"
                    elevation="2"
                    class="ma-2 white--text"
                    >CREATE</v-btn>

                </v-row>
            </v-container>
            </v-card>
        </div>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "AllStudents",
    data(){
      return{
        headers: [
            { text: 'Email', value: 'email' },
            { text: 'Name', value: 'name' },
            { text: 'Teacher', value: 'teacher' },
            { text: "Fix password", value: "password"}
        ],
        students: Object.values(this.$store.state.students),
        teachers: this.$store.state.teachers,
        arrteachers: Object.values(this.$store.state.teachers),

      }
    },

    methods: {
        newpassword: function(item : any){
            console.log(item)
        },

        newteacher: function(item: any, e : any){
            // e = teachername
            // item = studentobject
        },
    },

    components: {
    }
});
</script>

<style scoped>
    .sizer{
        width: 90%;
        height: 90%;
        margin: auto;
    }
</style>
