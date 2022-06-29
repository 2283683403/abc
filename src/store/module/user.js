export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    tokens(state, newtoken) {
      state.token = newtoken
      console.log(state.token)
      localStorage.setItem('token', state.token)
    }
  },
  actions: {
    GETtoken({ commit }, tokens) {
      commit('tokens', tokens)
    }
  }
}
