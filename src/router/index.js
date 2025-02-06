import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/services",
      name: "Service",
      component: () => import("@/views/Service.vue"),
    },
    {
      path: "/services/:id",
      name: "ServiceDetail",
      component: () => import("@/views/ServiceDetail.vue"),
    },
    {
      path: "/works",
      name: "Work",
      component: () => import("@/views/Work.vue"),
    },
    {
      path: "/works/:id",
      name: "WorkDetail",
      component: () => import("@/views/WorkDetail.vue"),
    },
    {
      path: "/career",
      name: "Career",
      component: () => import("@/views/Career.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/news",
      name: "News",
      component: () => import("@/views/News.vue"),
    },
    {
      path: "/news/:id",
      name: "NewsDetail",
      component: () => import("@/views/NewsDetail.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      } else {
        return { top: 0, behavior: "smooth" };
      }
    }
  },
});

export default router;