import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/conta',
      name: 'conta',
      component: () => import('../views/Conta.vue')
    },
    {
      path: '/adm',
      name: 'adm',
      component: () => import('../views/Adm.vue')
    }
  ]
})

export default router
