const state = {
  showResults: false,
}

const mutations = {
  updateResults: (state, value) => { state.showResults = value },
}

export default {
  state,
  mutations,
}
