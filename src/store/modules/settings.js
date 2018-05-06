const state = {
  showWizard: true,
}

const mutations = {
  updateWizard: (state, value) => { state.showWizard = value },
}

export default {
  state,
  mutations,
}
