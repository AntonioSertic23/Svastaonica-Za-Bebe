import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryView.vue"),
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: () => import("../views/AboutUsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/fonts",
      name: "fonts",
      component: () => import("../views/FontsView.vue"),
    },
    {
      path: "/singleitem",
      name: "singleitem",
      component: () => import("../views/SingleItemView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pagenotfound",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
});

export default router;
