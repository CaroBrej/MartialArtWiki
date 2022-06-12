import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/karate",
    name: "karate",
    component: () => import("../views/KarateView.vue"),
  },
  {
    path: "/box",
    name: "box",
    component: () => import("../views/BoxView.vue"),
  },
  {
    path: "/bjj",
    name: "bjj",
    component: () => import("../views/BJJView.vue"),
  },
  {
    path: "/judo",
    name: "judo",
    component: () => import("../views/JudoView.vue"),
  },
  {
    path: "/kickboxing",
    name: "kickboxing",
    component: () => import("../views/KickBoxingView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
