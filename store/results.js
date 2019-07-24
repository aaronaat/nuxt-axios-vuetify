export const state = () => ({
  albums: []
})

export const mutations = {
  add (state, payload) {
    state.albums = payload;
  }
}