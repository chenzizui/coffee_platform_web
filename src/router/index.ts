import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import MyOrder from '../views/my-order/index.vue'
import OurMenu from '../views/our-menu/index.vue'
import Profile from '../views/profile/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: MyOrder
  },
  {
    path: '/ourMenu',
    name: 'ourMenu',
    component: OurMenu
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
