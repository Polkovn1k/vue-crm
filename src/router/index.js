import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main-layout' },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'modal-layout' }, // С помощью мета мы выясняем какой layout будет подгружаться
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'modal-layout' },
    component: () => import('../views/Register')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: { layout: 'main-layout' },
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main-layout' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Record.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
