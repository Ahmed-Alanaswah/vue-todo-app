import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "home page",
    },
  },
  {
    path: "/show-todos",
    name: "showTodos",
    component: () => import("@/views/ShowTodos.vue"),
    meta: {
      title: "show todos",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
