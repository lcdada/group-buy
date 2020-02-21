import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Guide from "../views/Guide.vue"
import Contact from "../views/Contact.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  routes
});

export default router;
