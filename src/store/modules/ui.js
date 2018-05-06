const state = {
  showResults: false,
  wizardStage: 0,
}

const mutations = {
  updateResults: (state, value) => { state.showResults = value },
  updateWizardStage: (state, value) => { state.wizardStage = value },
}

export default {
  state,
  mutations,
}
