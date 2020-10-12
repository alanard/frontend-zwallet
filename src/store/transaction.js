import axios from 'axios'
// import Router from '../router/index'

const state = {
  user: [],
  currentPage: 1,
  pagination: null
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setPagination(state, payload) {
    state.pagination = payload
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
  // handleSearch(context, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/user?search=${payload}&page=1&limit=2`)
  //       .then((res) => {
  //         resolve(res.data.result)
  //         context.commit('setUser', res.data.result)
  //       }).catch((err) => {
  //         reject(err)
  //       })
  //   })
  // }
}

const getters = {
  get_all_user(state) {
    return state.user
  },
  pagination(state) {
    return state.pagination
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
