import Vue from "vue";
import Vuex from "vuex";
import { Module } from "vuex";
import { v4 as uuid } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teachers: {
      "8375d379-70fd-4977-b3ab-03d66f32ca8f": {
        email: "daniel1.berg@ga.ntig.se",
        name: "Daniel Berg",
        password: ""
      },
      "8375d379-71fd-4977-b3ab-03d66f32ca8f": {
        email: "daniel2.berg@ga.ntig.se",
        name: "Del Berg",
        password: ""
      },
      "8375ds79-70fd-4977-b3ab-03d66f32ca8f": {
        email: "daniel3.berg@ga.ntig.se",
        name: "Kaktus Berg",
        password: ""
      },
      "8375dc79-70fd-4977-b3ab-03d66f32ca8f": {
        email: "daniel4.berg@ga.ntig.se",
        name: "Ananas Berg",
        password: ""
      }
    },
    user: {
      id: 1
    },

    students: {
      "8375d379-70fd-4977-b3ab-03d66f32ca8f": {
        name: "Kalle",
        teacherId: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        password: "",
        email: "abc@gmail.com"
      },
      "83c5d379-70fd-4977-b3ab-03d66f32ca8f": {
        name: "Kalle",
        teacherId: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        password: "",
        email: "abc@gmail.com"
      },
      "83d5d379-70fd-4977-b3ab-03d66f32ca8f": {
        name: "Kalle",
        teacherId: "8375d379-71fd-4977-b3ab-03d66f32ca8f",
        password: "",
        email: "abc@gmail.com"
      },
      "83a5d379-70fd-4977-b3ab-03d66f32ca8f": {
        name: "Kalle",
        teacherId: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        password: "",
        email: "abc@gmail.com"
      },
      "8315d379-70fd-4977-b3ab-03d66f32ca8f": {
        name: "Kalle",
        teacherId: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        password: "",
        email: "abc@gmail.com"
      }
    }
  },
  mutations: {
    addTeacher(state, teacher) {
      //teacher = 1: {name: "teacher1", password: "password123", email: "teacher@mail.com"}
      Vue.set(state.teachers, uuid(), teacher);
    },

    addStudent(state, student) {
      Vue.set(state.students, uuid(), student);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getTeachers(state) {
      return state.teachers;
    },

    getStudents(state) {
      return state.students;
    }
  }
});
