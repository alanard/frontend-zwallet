import axios from 'axios'
import router from '../router/index'

const state = {
  // user: [
  //   {
  //     firstName: 'Robert',
  //     lastName: 'Chandler',
  //     phone: '+62 813-9387-7946',
  //     email: 'pewdiepie1@gmail.com'
  //   }
  // ],
  userLogin: [],
  userRegister: [],
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('id') || null,
  username: localStorage.getItem('username') || null
}

const mutations = {
  REGISTER_USER(state, payload) {
    state.userRegister = payload
  },
  LOGIN_USER(state, payload) {
    console.log(payload)
    state.token = payload.token
    state.userId = payload.userId
  },
  LOGOUT(state) {
    state.token = null
  },
  USER_LOGGED(state, payload) {
    state.userLogin = (payload)
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
  register(context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/user/register`, payload)
        .then(res => {
          console.log(res)
          localStorage.setItem('registerId', res.data.result.insertId)
          router.push('/pin')
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 403) {
            alert('username or email already exist')
          }
        })
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
        .catch(err => {
          if (err.response.status === 403) {
            alert('email or password incorrect')
          }
        })
    })
  },
  logout(context) {
    context.commit('LOGOUT')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    router.push('/login')
  },
  updateUser(context, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/user/${payload.id}`, payload.data)
        .then(res => {
          console.log(res.data.result)
          resolve(res.data.result)
        })
    })
  },
  getUserLogin(context) {
    return new Promise((resolve, reject) => {
      const id = localStorage.getItem('id')
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/user/${id}`)
        .then(res => {
          console.log(res.data.result)
          context.commit('USER_LOGGED', res.data.result)
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
  },
  get_user_login(state) {
    return state.userLogin
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
