import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import('../views/Intro.vue'),
    }
  ]
})

export default router
