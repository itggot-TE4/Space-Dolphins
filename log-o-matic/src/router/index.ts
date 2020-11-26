import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store/index";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import ViewLogs from "../views/ViewLogs.vue";
import Login from "../views/Login.vue";
import Student from "../views/Student.vue";
import Logs from "../views/showLogs.vue";
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
  // {
  //   path: "/student",
  //   name: "Student",
  //   component: Student,
  //   meta: {
  //     allowedRoles: ["student"]
  //   }
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ "../views/Login.vue")
  // },
  {
    path: "/ShowLogsForOneDay",
    name: "ShowLogsForOneStudent",
    component: ShowLogsForOneDay
  },
  {
    path: "/ShowLogsForOneStudent",
    name: "ShowLogsForOneStudent",
    component: ShowLogsForOneStudent
  },
  {
    path: "/ShowOnlyOneLog",
    name: "ShowOnlyOneLog",
    component: ShowOnlyOneLog
  },
  {
    path: "/StudentLog",
    name: "StudentLog",
    component: StudentLog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
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
});

export default router;
