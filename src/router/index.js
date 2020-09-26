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
/* My Part */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
