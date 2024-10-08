import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TestView from "../views/TestView.vue";
import User from "../views/User.vue";
import ErrorView from "../views/ErrorView.vue";
import UserDetail from "../views/UserDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/testview",
    name: "testview",
    component: TestView,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorView,
  },
  {
    path: "/userdetail/:id",
    component: UserDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
