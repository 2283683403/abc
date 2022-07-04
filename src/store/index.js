import { createStore } from 'vuex'
import user from './module/user'
import getters from './getters'
import tagsview from './module/tagsview'
export default createStore({
  getters,
  modules: {
    user,
    tagsview
  }
})
