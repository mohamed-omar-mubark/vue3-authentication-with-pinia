// public routes
let publicRoutes = [
  // home
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue")
  }
];

export default publicRoutes;
