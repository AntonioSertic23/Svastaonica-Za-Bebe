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
      path: "/singleitem/:id",
      name: "singleitem",
      component: () => import("../views/SingleItemView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pagenotfound",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      console.log("saved position");
      return savedPosition;
    }
    if (to.hash) {
      console.log("hash!");
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  },
});

export default router;
