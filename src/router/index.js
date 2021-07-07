import Vue from "vue";
import VueRouter from "vue-router";

// 懒加载
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Me = () => import("views/me/Me");
const Rater = () => import("views/rater/Rater");
const Search = () => import("views/search/Search");
const Progress = () => import("views/progress/Progress");
const Tab = () => import("views/tab/index.vue")
Vue.use(VueRouter);
const routes = [
  {
    path: "",
    redirect: "/rater"
  },
  {
    path: "/home",
    // 指定的组件
    component: Home
  },
  {
    path: "/tab",
    component: Tab
  },
  {
    path: "/rater",
    component: Rater
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/progress",
    component: Progress
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/me",
    component: Me
  }
];
const router = new VueRouter({
  routes,
  // url模式
  mode: "history"
});

export default router;
