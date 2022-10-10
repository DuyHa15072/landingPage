import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path:'/landing/vn', name: 'home', component: HomeView } 
    },
    {
      path: '/landing/vn',
      name: 'home',
      component: HomeView
    },
    {
      path: '/landing/en',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    { path: '/:pathMatch(.*)*',redirect: { path:'/landing/vn', name: 'home', component: HomeView }  },
  ]
})

export default router
