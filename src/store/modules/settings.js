const state = {
  showWizard: true,
  identifier: '',
}

const mutations = {
  updateWizard: (state, value) => { state.showWizard = value },
  updateIdentifier: (state, value) => { state.identifier = value },
}

export default {
  state,
  mutations,
}
