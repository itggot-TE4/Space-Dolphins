import { Module } from "vuex";

export interface User {
  id: string;
  name: string;
  email: string;
  teacherId?: string;
  password: string;
  role: string;
  logs?: Log[];
}

export interface Log {
  logId: number;
  day: string;
  week: string;
  year: number;
  logUser: string;
  questions: {}[];
  comments: {}[];
}

export interface LogsState {
  users: User[];
}

export interface Comment {
  name: string;
  data: string;
  log: Record<string, string | number>;
}

export default {
  state: {
    // namespaced: true,
    users: [
      {
        id: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "Jonathan Ronsten",
        teacherId: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "abc@gmail.com",
        role: "student",
        logs: [
          {
            logId: 0,
            day: "Monday",
            week: "Week 48",
            year: 2020,
            logUser: "Jonathan Ronsten",
            questions: [
              {
                q: "Vad har du gjort under dagen?",
                a: "Jag har lärt mig mycket"
              },
              { q: "Vad har du lärt dig idag?", a: "Det har gått bra" },
              {
                q:
                  "Vad förstod du inte / Vilka frågor har du inte fått svar på?",
                a: "Vet inte"
              },
              { q: "Vad vill du lära dig mer om?", a: "Ja" }
            ],
            comments: [
              {
                name: "Daniel Berg",
                data: "Mycket bra"
              },
              {
                name: "Jonathan Ronsten",
                data: "Tack så mycket"
              }
            ]
          },
          {
            logId: 1,
            day: "Tuesday",
            week: "Week 48",
            year: 2020,
            logUser: "Jonathan Ronsten",
            questions: [
              { q: "Vad har du gjort under dagen?", a: "asdadadsafasda" },
              { q: "Vad har du lärt dig idag?", a: "asda" },
              {
                q:
                  "Vad förstod du inte / Vilka frågor har du inte fått svar på?",
                a: ""
              },
              { q: "Vad vill du lära dig mer om?", a: "Ja" }
            ],
            comments: []
          },
          {
            logId: 2,
            day: "Wednesday",
            week: "Week 48",
            year: 2020,
            logUser: "Jonathan Ronsten",
            questions: [
              { q: "Vad har du gjort under dagen?", a: "JAJAJAJAJA" },
              { q: "Vad har du lärt dig idag?", a: "Jag har gett upp" },
              {
                q:
                  "Vad förstod du inte / Vilka frågor har du inte fått svar på?",
                a: "Vet inte"
              },
              { q: "Vad vill du lära dig mer om?", a: "Ja" }
            ],
            comments: []
          }
        ]
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
    addComment(state: LogsState, newComment: Comment) {
      const comment = { name: newComment.name, data: newComment.data };
      console.log(newComment);
      const log = newComment.log;
      console.log(newComment);
      state.users
        .find(user => user.name === log.logUser)
        ?.logs?.find((l: Log) => l.logId === log.logId)
        ?.comments.push(comment);
    }
  },
  actions: {
    addComments(ctx, newComment) {
      ctx.commit("addComment", newComment);
    }
  },
  getters: {
    getLogs(state) {
      return state.users;
    }
  }
} as Module<LogsState, {}>;
