import axios from 'axios'
// import Router from '../router/index'

const state = {
  transactionIn: [],
  transactionOut: [],
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
  setTransactionIn(state, payload) {
    state.transactionIn = payload
  },
  setTransactionOut(state, payload) {
    state.transactionOut = payload
  },
  SET_INCOME(state, payload) {
    state.income = payload
  },
  SET_EXPENSE(state, payload) {
    state.expense = payload
  }
}

const actions = {
  getTransactionInById(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/in/${localStorage.getItem('id')}`)
        .then((res) => {
          console.log('get transaction', res.data.result)
          context.commit('setTransactionIn', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
          console.log(err)
        })
    })
  },
  getTransactionOutById(context) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/transaction/out/${localStorage.getItem('id')}`)
        .then((res) => {
          console.log('get transaction', res.data.result)
          context.commit('setTransactionOut', res.data.result)
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
  get_transaction_in(state) {
    return state.transactionIn
  },
  get_transaction_out(state) {
    return state.transactionOut
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
