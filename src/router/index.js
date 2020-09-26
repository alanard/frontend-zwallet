import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
/* My Part (erlangga) */
import Register from '../views/main/auth/register.vue'
import Login from '../views/main/auth/login.vue'
import forgotPassword from '../views/main/auth/forgot.vue'
import Pin from '../views/main/auth/pin.vue'
import Personal from '../views/main/profile/personal.vue'
import ChangePw from '../views/main/profile/change-pw.vue'
import History from '../views/main/history/history.vue'
import Transfer from '../views/main/transfer/transfer-page.vue'
import Search from '../views/main/transfer/search.vue'
import Input from '../views/main/transfer/input-amount.vue'
/* My Part */
import Home from '../views/main/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot',
    name: 'forgotPassword',
    component: forgotPassword
  },
  {
    path: '/pin',
    name: 'Pin',
    component: Pin
  },
  {
    path: '/profile/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/profile/change',
    name: 'ChangePw',
    component: ChangePw
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer,
    children: [
      {
        path: '/',
        name: 'Search',
        component: Search
      },
      {
        path: 'input',
        name: 'Input',
        component: Input
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
