import { createStore } from 'vuex'

const initialTime = () => {
  const d = new Date()
  return d.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    messages: []
  }).replace(' ', '')
}

const publicPath = process.env.NODE_ENV === 'production' ? '/neni-maker/' : '/'

export default createStore({
  state: {
    time: initialTime(),
    avatar: `${publicPath}images/avatar.png`,
    name: 'El Shrexican',
    status: 'online',
    publicPath
  },
  mutations: {
    update (state, { item, value }) {
      state[item] = value
    },
    updateMessages (state, rawText) {
      const messages = rawText
        .split('=====')
        .map(msg => {
          const [type, text, time] = msg.split('\n')
            .filter(line => line !== '')
          return { type, text, time }
        })
      state.messages = messages
    }
  },
  actions: {
  },
  modules: {
  }
})
