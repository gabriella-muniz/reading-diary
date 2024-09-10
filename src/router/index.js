import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeInicial.vue')
    },
    {
      path: '/MeusLidos',
      name: 'MeusLidos',
      component: () => import('../views/MeusLidos.vue')
    },
    {
      path: '/Prox',
      name: 'Proximas',
      component: () => import('../views/ProxLeituras.vue')
    },

  ]
})

export default router
