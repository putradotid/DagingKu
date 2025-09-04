import { createRouter, createWebHistory } from "vue-router"
import Home from "../App.vue"
import DetailView from "../views/DetailView.vue"

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/meal/:id", name: "detail", component: DetailView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
