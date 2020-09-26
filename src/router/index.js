import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
import Home from '../views/main/home/home.vue'
import Dashboard from '../views/main/home/dashboard/Dashboard.vue'
import Faq from '../views/main/home/faq/Faq.vue'
import ModalPin from '../components/_base/ModalPin.vue'

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
        path: '/',
        component: Dashboard
      },
      {
        path: 'faq',
        name: Faq,
        component: Faq
      },
      {
        path: 'modalpin',
        name: ModalPin,
        component: ModalPin
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
