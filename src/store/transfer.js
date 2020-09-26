
const state = {
  receiver: [
    {
      name: 'Samuel Sushi',
      phone: '+62 813-8492-9994'
    },
    {
      name: 'Momo Taro',
      phone: '+62 813-8492-9994'
    },
    {
      name: 'Jessica Keen',
      phone: '+62 813-8492-9994'
    },
    {
      name: 'Michael Lee',
      phone: '+62 813-8492-9994'
    }
  ]
}

const mutations = {

}

const actions = {

}

const getters = {
  get_receiver (state) {
    return state.receiver
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
