import { createStore } from 'vuex'

const initialTime = () => {
  const d = new Date()
  return d.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).replace(' ', '')
}

export default createStore({
  state: {
    time: initialTime(),
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
