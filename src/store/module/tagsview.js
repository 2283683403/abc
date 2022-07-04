export default {
  namespaced: true,
  state: {
    tagsView: JSON.parse(localStorage.getItem('tagsview')) || []
  },
  mutations: {
    setTagsView(state, tagsView) {
      const newTagsView = state.tagsView.find(
        (item) => item.path === tagsView.path
      )
      if (!newTagsView) {
        state.tagsView.push(tagsView)
        localStorage.setItem('tagsview', JSON.stringify(state.tagsView))
      }
    },
    removeTagsView(state, index) {
      console.log(state.tagsView[index], 'aa')
      state.tagsView.splice(index, 1)
      localStorage.setItem('tagsview', JSON.stringify(state.tagsView))
    }
  },
  actions: {}
}
