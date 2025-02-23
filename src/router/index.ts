import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Landing from '../views/Landing.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 