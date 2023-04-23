// auth routes
let authRoutes = [
  // login
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../views/login/Login.vue")
  }
];

export default authRoutes;
