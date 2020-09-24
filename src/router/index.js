import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
import Register from '../views/main/auth/register.vue'
import Login from '../views/main/auth/login.vue'
import forgotPassword from '../views/main/auth/forgot.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
