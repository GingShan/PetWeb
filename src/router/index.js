import { createRouter, createWebHashHistory } from 'vue-router'
import Adoption from '../views/Adoption.vue'
import findPet from '../views/findPet.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/Adoption',
      name: 'adoption',
      component: Adoption
    },
    {
      path: '/findPet',
      name: 'findPet',
      component: findPet
    },

  ]
})

export default router
