import Vue from "vue";
import { Module } from "vuex";
import { v4 as uuid } from "uuid";

export interface User {
  email: string;
  name: string;
  id: string;
  password: string;
  role: string;
  teacherId?: string;
}

export interface UserState {
  users: User[];
  currentUser: User;
}

export default {
  state: {
    namespaced: true,
    currentUser: {
      role: "guest",
      name: "guest"
    } as User,
    users: [
      {
        id: "8375d379-70fd-4977-b5ab-03d66f32ca8f",
        email: "admin@nti.se",
        name: "Admin",
        password: "123",
        role: "admin"
      },
      {
        id: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        email: "daniel.berg@ga.ntig.se",
        name: "Daniel Berg",
        password: "123",
        role: "teacher"
      },
      {
        id: "8375d379-71fd-4977-b3ab-03d66f32ca8f",
        email: "daniel.berg2@ga.ntig.se",
        name: "Del Berg",
        password: "123",
        role: "teacher"
      },
      {
        id: "8375ds79-70fd-4977-b3ab-03d66f32ca8f",
        email: "daniel.berg3@ga.ntig.se",
        name: "Kaktus Berg",
        password: "123",
        role: "teacher"
      },
      {
        id: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        email: "daniel.berg4@ga.ntig.se",
        name: "Ananas Berg",
        password: "123",
        role: "teacher"
      },
      {
        id: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "abc",
        teacherId: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "abc@gmail.com",
        role: "student"
      },
      {
        id: "83c5d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "123",
        teacherId: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "123@gmail.com",
        role: "student"
      },
      {
        id: "83d5d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "test",
        teacherId: "8375d379-71fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "test@gmail.com",
        role: "student"
      },
      {
        id: "83a5d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "halloj",
        teacherId: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "halloj@gmail.com",
        role: "student"
      },
      {
        id: "8315d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "Kalle",
        teacherId: "8375dc79-70fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "Kalle@gmail.com",
        role: "student"
      }
    ]
  },
  mutations: {
    addTeacher(state, teacher) {
      //teacher = 1: {name: "teacher1", password: "password123", email: "teacher@mail.com"}
      teacher["id"] = uuid();
      state.users.push(teacher);
    },

    setCurrentUser(state, user) {
      state.currentUser = user;
    },

    addStudent(state, student) {
      student["id"] = uuid();
      state.users.push(student);
    },
    
    updateTeacherPassword(state, updatedteacher) {
      const index = state.users.findIndex(
        teacher => teacher.id == updatedteacher.id
      );
      state.users[index].password = updatedteacher.password;
    }
  },
  actions: {
    login({ commit }, user) {
      commit("setCurrentUser", user);
    }
  },
  getters: {
    getTeachers(state) {
      return state.users.filter(user => user.role === "teacher");
    },

    getStudents(state) {
      return state.users.filter(user => user.role === "student");
    },

    getUsers(state) {
      return state.users;
    },

    getCurrentUser(state) {
      return state.currentUser;
    },

    getCurrentUserRole(state) {
      return state.currentUser.role;
    }
  }
} as Module<UserState, {}>;
