import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import { supabase } from '../supabase'

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
      path: '/cardapio',
      name: 'cardapio',
      components: {
        default: () => import('@/views/Cardapio.vue'),
        Navbar: () => import('@/components/Navbar.vue')
      }
    },
    {
      path: '/adm',
      name: 'adm',
      component: () => import('../views/Adm.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  const { data, error } = await supabase.auth.getSession()

  if (
    !data.session &&
    to.name !== 'login' &&
    to.name !== 'home'
  ) {
    return { name: 'login' }
  } else if (
    data.session && to.name === 'login'
  ) {
    return { name: 'cardapio' }
  }
})

export default router
