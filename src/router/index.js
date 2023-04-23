import { createRouter, createWebHistory } from "vue-router";

// import routes from modules
// public routes
import publicRoutes from "../modules/public/routes/public.routes.js";

const baseRoutes = [];

const routes = baseRoutes.concat(
  // public routes
  publicRoutes
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,

  scrollBehavior(to) {
    if (to.hash) {
      // return savedPosition or scroll to anchor by returning the selector
      return { el: to.hash, behavior: "smooth" };
    } else {
      // return smooth scroll to top
      return { top: 0, behavior: "smooth" };
    }
  }
});

export default router;
