import axios from 'axios'
// import Router from '../router/index'

const state = {
  transaction: [],
  income: [],
  expense: []
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
  },
  SET_INCOME(state, payload) {
    state.income = payload
  },
  SET_EXPENSE(state, payload) {
    state.expense = payload
  }
}

const actions = {
  getTransactionById(context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/${localStorage.getItem('id')}`)
        .then((res) => {
          console.log('get transaction', res.data.result)
          context.commit('setTransaction', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
          console.log(err)
        })
    })
  },
  incomeThisWeek(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/income/${localStorage.getItem('id')}`)
        .then(res => {
          context.commit('SET_INCOME', res.data.result[0])
        })
        .catch(err => console.log(err))
    })
  },
  expenseThisWeek(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/expense/${localStorage.getItem('id')}`)
        .then(res => {
          context.commit('SET_EXPENSE', res.data.result[0])
        })
        .catch(err => console.log(err))
    })
  }
}

const getters = {
  get_transaction(state) {
    return state.transaction
  },
  get_income(state) {
    return state.income
  },
  get_expense(state) {
    return state.expense
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
