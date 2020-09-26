import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
import Home from '../views/main/home/home.vue'
import Dashboard from '../views/main/home/dashboard/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
