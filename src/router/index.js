import { createRouter, createWebHistory } from 'vue-router'
import Inhabitants from '../views/Inhabitants.vue'
import Planets from '../views/Planets.vue'

const routes = [
  {
    path: '/',
    redirect: '/planets'
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets
  },
  {
    path: '/inhabitants',
    name: 'Inhabitants',
    component: Inhabitants
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 