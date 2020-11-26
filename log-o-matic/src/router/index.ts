import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store/index";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import ShowLogs from "../views/ShowLogs.vue";
import Login from "../views/Login.vue";

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
    component: ShowLogs,
    meta: {
      allowedRoles: ["admin", "teacher", "student"]
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      allowedRoles: ["admin"]
    }
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
    } else {
      next("/logs");
    }
  }
});

export default router;
