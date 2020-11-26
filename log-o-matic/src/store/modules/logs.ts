export interface Log {
  email: string;
  name: string;
  id: string;
  password: string;
  role: string;
  teacherId?: string;
  logs: {}[];
}

export interface Logs {
  day: string;
  week: string;
  logID: number;
  year: number;
  questions: {}[];
  comments: {}[];
}

export interface Comment {
  name: string;
  data: string;
  log: Record<string, any>;
}

export default {
  state: {
    namespaced: true,
    logs: [
      {
        id: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        name: "Jonathan Ronsten",
        teacherId: "8375d379-70fd-4977-b3ab-03d66f32ca8f",
        password: "123",
        email: "abc@gmail.com",
        role: "student",
        log: [
          {
            day: "Monday",
            logUser: "Jonathan Ronsten",
            week: "Week 48",
            logId: 0,
            year: 2020,
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
            day: "Tuesday",
            week: "Week 48",
            logUser: "Jonathan Ronsten",
            logId: 1,
            year: 2020,
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
            day: "Wednesday",
            week: "Week 48",
            logUser: "Jonathan Ronsten",
            logId: 2,
            year: 2020,
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
    addComment(state: any, newComment: Comment) {
      const comment = { name: newComment.name, data: newComment.data };
      console.log(newComment);
      const log: any = newComment.log;
      console.log(newComment);
      state.logs
        .find((user: any) => user.name === log.logUser)
        .log.find((l: any) => l.logId === log.logId)
        .comments.push(comment);
    }
  },
  actions: {
    addComments(ctx: any, newComment: Record<string, any>) {
      ctx.commit("addComment", newComment);
    }
  },
  getters: {
    getLogs(state: any) {
      return state.logs;
    }
  }
};
