import { createStore } from 'vuex'

export default createStore({
  state: {
    time: '7:10PM',
    avatar: '/images/avatar.png',
    name: 'El Shrexican',
    status: 'online'
  },
  mutations: {
    update (state, { item, value }) {
      state[item] = value
    }
  },
  actions: {
  },
  modules: {
  }
})
