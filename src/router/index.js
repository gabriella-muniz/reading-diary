import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PageInicial.vue')
    },
    {
      path: '/MinhaRede',
      name: 'rede',
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
});

export default router;
