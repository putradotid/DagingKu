import { createRouter, createWebHistory } from "vue-router"
import Home from "../App.vue"
import DetailView from "../views/DetailView.vue"
import Latihan from "../views/Latihan.vue"

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/meal/:id", name: "detail", component: DetailView, props: true },
  { path: "/latihan", name: "home", component: Latihan },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
