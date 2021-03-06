import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store/index";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import ViewLogs from "../views/ViewLogs.vue";
import Login from "../views/Login.vue";
import Student from "../views/Student.vue";
import ShowLogsForOneDay from "../views/ShowLogsForOneDay.vue";
import ShowLogsForOneStudent from "../views/ShowLogsForOneStudent.vue";
import ShowOnlyOneLog from "../views/ShowOnlyOneLog.vue";
import StudentLog from "../views/StudentLog.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      allowedRoles: ["guest"]
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      allowedRoles: ["guest"]
    }
  },
  {
    path: "/logs",
    name: "Logs",
    component: ViewLogs,
    meta: {
      allowedRoles: ["admin", "teacher"]
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      allowedRoles: ["admin"]
    }
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
    meta: {
      allowedRoles: ["student"]
    }
  },
  {
    path: "/showlogsforoneday",
    name: "ShowLogsForOneStudent",
    component: ShowLogsForOneDay,
    meta: {
      allowedRoles: ["admin", "teacher", "student"]
    }
  },
  {
    path: "/showlogsforonestudent",
    name: "ShowLogsForOneStudent",
    component: ShowLogsForOneStudent,
    meta: {
      allowedRoles: ["admin", "teacher", "student"]
    }
  },
  {
    path: "/showonlyonelog",
    name: "ShowOnlyOneLog",
    component: ShowOnlyOneLog,
    meta: {
      allowedRoles: ["admin", "teacher", "student"]
    }
  },
  {
    path: "/studentlog",
    name: "StudentLog",
    component: StudentLog,
    meta: {
      allowedRoles: ["admin", "teacher", "student"]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.allowedRoles) {
    const allowedRoles: string[] = to.meta.allowedRoles;
    const userRole: string = store.getters.getCurrentUserRole;
    if (allowedRoles.some(role => role === userRole)) {
      next();
    } else {
      if (userRole === "guest") {
        next("/");
      } else if (userRole === "student") {
        next("/student");
      } else {
        next("/logs");
      }
    }
  } else {
    next();
  }
});

export default router;
