import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index.vue'
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
        path: 'transfer',
        name: Transfer,
        component: Transfer
      },
      {
        path: 'inputtransfer',
        name: InputTransfer,
        component: InputTransfer
      },
      {
        path: 'confirmationtransfer',
        name: ConfirmationTransfer,
        component: ConfirmationTransfer
      },
      {
        path: 'transfersuccess',
        name: TransferSuccess,
        component: TransferSuccess
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
