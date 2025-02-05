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
    // Service pages
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
    // {
    //   path: "/services/ocistika-gradiren",
    //   name: "Ocistika",
    //   component: () => import("@/views/services/ocistika-gradiren.vue"),
    // },
    // {
    //   path: "/services/zamena-technology",
    //   name: "Zameno-technology",
    //   component: () => import("@/views/services/zamena-technology.vue"),
    // },
    // {
    //   path: "/services/montaz-remont",
    //   name: "Montaz-remont",
    //   component: () => import("@/views/services/montaz-remont.vue"),
    // },
    // {
    //   path: "/services/neftepererabotki-i-khimicheskoy-promyshlennosti",
    //   name: "Neftepererabotki-i-khimicheskoy-promyshlennosti",
    //   component: () => import("@/views/services/neftepererabotki-i-khimicheskoy-promyshlennosti.vue"),
    // },
    // {
    //   path: "/services/videonablyudenie-i-poharnaya-sistema",
    //   name: "Videonablyudenie-i-poharnaya-sistema",
    //   component: () => import("@/views/services/videonablyudenie-i-poharnaya-sistema.vue"),
    // },
    // {
    //   path: "/services/promyvka-teploobmennikow",
    //   name: "Promyvka-teploobmennikow",
    //   component: () => import("@/views/services/promyvka-teploobmennikow.vue"),
    // },
    // {
    //   path: "/services/ocistika-promyvka",
    //   name: "Ocistika-promyvka",
    //   component: () => import("@/views/services/ocistika-promyvka.vue"),
    // },
    // {
    //   path: "/services/ocistika-plastinka",
    //   name: "Ocistika-plastinka",
    //   component: () => import("@/views/services/ocistika-plastinka.vue"),
    // },
    // ############
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
    // {
    //   path: "/test",
    //   name: "Test",
    //   component: () => import("@/views/test.vue"),
    // },
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
