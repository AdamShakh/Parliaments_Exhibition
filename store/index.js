export const state = () => ({
    Pages: []
})
export const mutations = {
    setPages(state, newPages) {
      state.Pages = newPages
    }
}
export const getters = {
    getPages(state) {
      return state.Pages
    }
}