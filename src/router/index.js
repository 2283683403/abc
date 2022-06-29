import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../layout/index.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
