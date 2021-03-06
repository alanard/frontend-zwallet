import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
/* My Part (erlangga) */
import Register from '../views/main/auth/register.vue'
import Login from '../views/main/auth/login.vue'
import forgotPassword from '../views/main/auth/forgot.vue'
import Pin from '../views/main/auth/pin.vue'
import Profile from '../views/main/home/profile/profile.vue'
import MainProfile from '../views/main/home/profile/main.vue'
import Personal from '../views/main/home/profile/personal.vue'
import ChangePw from '../views/main/home/profile/change-pw.vue'
import ChangePin from '../views/main/home/profile/pin.vue'
import Phone from '../views/main/home/profile/phone.vue'
import History from '../views/main/home/history/History.vue'
import store from '../store/index'
/* My Part */
import Home from '../views/main/home/home.vue'
import Dashboard from '../views/main/home/dashboard/Dashboard.vue'
import Faq from '../views/main/home/faq/Faq.vue'
import Transfer from '../views/main/home/transfer/Transfer.vue'
import InputTransfer from '../views/main/home/transfer/InputTransfer.vue'
import ConfirmationTransfer from '../views/main/home/transfer/Confirmation.vue'
import TransferSuccess from '../views/main/home/transfer/TransferSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    // name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        component: Dashboard
      },
      {
        path: 'faq',
        // name: Faq,
        component: Faq
      },
      /* My Part (erlangga) */
      {
        path: 'transfer',
        // name: Transfer,
        component: Transfer
      },
      {
        path: 'inputtransfer',
        // name: InputTransfer,
        component: InputTransfer
      },
      {
        path: 'confirmationtransfer',
        // name: ConfirmationTransfer,
        component: ConfirmationTransfer
      },
      {
        path: 'transfersuccess',
        // name: TransferSuccess,
        component: TransferSuccess
      },
      {
        path: 'history',
        // name: History,
        component: History
      },
      {
        path: 'profile',
        // name: 'profile',
        component: Profile,
        children: [
          {
            path: '/',
            // name: 'mainProfile',
            component: MainProfile
          },
          {
            path: 'personal',
            // name: 'personal',
            component: Personal
          },
          {
            path: 'password',
            // name: 'password',
            component: ChangePw
          },
          {
            path: 'pin',
            // name: 'pin',
            component: ChangePin
          },
          {
            path: 'phone',
            component: Phone
          }
        ]
      }
    ]
  },
  /* My Part (Erlangga) */
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* My Part (erlangga) */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.is_login) {
      next({
        // path: '/login',
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.is_login) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
