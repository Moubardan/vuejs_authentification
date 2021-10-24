import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Singup from "../components/Singup.vue";
import ForgotPassword from "../components/ForgotPassword.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Singup",
    component: Singup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
