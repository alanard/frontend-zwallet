import axios from 'axios'
import router from '../router/index'

const state = {
  user: [
    {
      firstName: 'Robert',
      lastName: 'Chandler',
      phone: '+62 813-9387-7946',
      email: 'pewdiepie1@gmail.com'
    }
  ],
  token: localStorage.getItem('token') || null
}

const mutations = {
  LOGIN_USER(state, payload) {
    console.log(payload)
    state.token = payload.token
  }
}

const actions = {
  interceptorsRequest(context) {
    axios.interceptors.request.use(function(config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${context.state.token}`
      return config
    }, function(error) {
      // Do something with request error
      return Promise.reject(error)
    })
  },
  interceptorsResponse(context) {
    axios.interceptors.response.use(function(response) {
      console.log(response)
      return response
    }, function(error) {
      console.log(error)
      console.log(error.response)
      console.log(error.response.data.result.message)
      if (error.response.status === 401) {
        console.log(error.response)
        // if (error.response.data.result.message === 'invalid token') {
        //   context.commit('setToken', null)
        //   localStorage.removeItem('token')
        //   router.push('/login')
        //   alert('maaf anda tidak boleh merubah token dengan sendirinya')
        // } else if (error.response.data.result.message === 'token expired') {
        //   context.commit('setToken', null)
        //   localStorage.removeItem('token')
        //   router.push('/login')
        //   alert('maaf session habis silahkan login kembali')
        // }
      }
      return Promise.reject(error)
    })
  },
  login(context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/user/login`, payload)
        .then(res => {
          console.log(res.data.result)
          context.commit('LOGIN_USER', res.data.result)
          localStorage.setItem('token', res.data.result.token)
          localStorage.setItem('id', res.data.result.userId)
          router.push('/home')
          resolve(res.data.result)
        })
    })
  }
}

const getters = {
  get_user(state) {
    return state.user
  },
  is_login(state) {
    return state.token !== null
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
