import User from '../../api/user'
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || ''
  },
  mutations: {
    tokens(state, newtoken) {
      state.token = newtoken
      console.log(state.token)
      localStorage.setItem('token', state.token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', userInfo)
    }
  },
  actions: {
    // 存储token
    GETtoken({ commit }, tokens) {
      commit('tokens', tokens)
    },
    async getUserInfo({ commit }) {
      try {
        const response = await User.getUserInfo()
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    // 点击退出登录触发的
    logout({ commit }) {
      commit('tokens', '')
      commit('setUserInfo', '')
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
    }
  }
}
