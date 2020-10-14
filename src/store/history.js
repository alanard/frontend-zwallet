import axios from 'axios'
// import Router from '../router/index'

const state = {
  transaction: []
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setPagination(state, payload) {
    state.pagination = payload
  },
  setTransaction(state, payload) {
    state.transaction = payload
  }
}

const actions = {
  getTransactionById(context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/${localStorage.getItem('id')}`)
        .then((res) => {
          console.log(res.data.result)
          context.commit('setTransaction', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
          console.log(err)
        })
    })
  }
}

const getters = {
  get_transaction(state) {
    return state.transaction
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
