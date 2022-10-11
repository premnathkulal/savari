import { ViewName } from '@/constants/enum'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/LandingView/LandingView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: ViewName.HOME,
    component: HomeView,
  },
  {
    path: '/login',
    name: ViewName.LOGIN,
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/LoginView/LoginView.vue'
      ),
  },
  {
    path: '/register',
    name: ViewName.REGISTER,
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "login" */ '../views/RegisterView/RegisterView.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
