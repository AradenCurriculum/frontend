import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import { appRoutes } from './routes'
import { createRouteGuard } from './guard'

const createHistory = import.meta.env.PROD
  ? createWebHistory
  : createWebHashHistory

const router = createRouter({
  history: createHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login.vue'),
      meta: {
        requiresAuth: false
      }
    },
    ...appRoutes
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createRouteGuard(router)

export { router }
