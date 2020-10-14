import axios from 'axios'
// import Router from '../router/index'

const state = {
  user: [],
  currentPage: 1,
  pagination: null,
  receiver: []
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setPagination(state, payload) {
    state.pagination = payload
  },
  setReceiver(state, payload) {
    console.log(payload)
    const data = payload
    state.receiver.push(data)
    console.log(data)
  },
  setReceiverNull(state) {
    state.receiver = []
  }
}

const actions = {
  getAllUser(context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/user?${payload || ''}page=1&limit=6`)
        .then((res) => {
          // console.log(res)
          context.commit('setUser', res.data.result)
          context.commit('setPagination', res.data.resultPage)
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
  get_all_user(state) {
    return state.user
  },
  pagination(state) {
    return state.pagination
  },
  getReceiver(state) {
    console.log(state.receiver)
    return state.receiver
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
