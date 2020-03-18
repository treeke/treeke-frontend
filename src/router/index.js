import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import(/* webpackChunkName: "about" */ '../components/Header.vue')
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import(/* webpackChunkName: "about" */ '../components/Footer.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
