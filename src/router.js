import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import TodoMain from "./views/TodoMain";
import Testing from "./views/Testing";
import About from "./views/About";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/testing",
      component: Testing
    },
    {
      path: "/todoMain",
      component: TodoMain
    },
    {
      path: "/about",
      component: About
    }
  ]
});

export default router;