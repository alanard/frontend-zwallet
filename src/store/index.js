import Vue from 'vue'
import Vuex from 'vuex'
/* My Part (erlangga) */
import Profile from './profile'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Profile
  }
})
