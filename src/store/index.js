import Vue from 'vue'
import Vuex from 'vuex'
/* My Part (erlangga) */
import Profile from './profile'
import Transaction from './transaction'
import History from './history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Profile,
    Transaction,
    History
  }
})
