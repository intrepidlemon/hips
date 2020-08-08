const defaultParameters = {
  years: 1,
  std: 0.5,
  relativeValueOfHemi: 0.5,
  totalSuccess: 100,
  hemiSuccess: 100,
  failure: 100,
  dislocation: 5,
  totalLongetivityYears: 12,
  totalLongetivityPercent: 0.9,
  hemiLongetivityYears: 6,
  hemiLongetivityPercent: 0.9,
  hemiDislocationRate: 0.00,
  totalDislocationRate: 0.03,
  yearTotalDislocationEquals: 15,
  trials: 1000,
  discount: 'none',
  clinicalSignificance: 0.05,
  emphasizeFirstYearMortality: true,
}

const state = { ...defaultParameters }

const mutations = {
  updateYears: (state, value) => { state.years = value },
  updateSTD: (state, value) => { state.std = value },
  updateRelativeValueOfHemi: (state, value) => { state.relativeValueOfHemi = value },
  updateTotalSuccess: (state, value) => { state.totalSuccess = value },
  updateHemiSuccess: (state, value) => { state.hemiSuccess = value },
  updateFailure: (state, value) => { state.failure = value },
  updateDislocation: (state, value) => { state.dislocation = value },
  updateTotalLongetivityYears: (state, value) => { state.totalLongetivityYears = value },
  updateTotalLongetivityPercent: (state, value) => { state.totalLongetivityPercent = value },
  updateHemiLongetivityYears: (state, value) => { state.hemiLongetivityYears = value },
  updateHemiLongetivityPercent: (state, value) => { state.hemiLongetivityPercent = value },
  updateHemiDislocationRate: (state, value) => { state.hemiDislocationRate = value },
  updateTotalDislocationRate: (state, value) => { state.totalDislocationRate = value },
  updateTrials: (state, value) => { state.trials = value },
  updateDiscount: (state, value) => { state.discount = value },
  updateClinicalSignificance: (state, value) => { state.clinicalSignificance = value },
  updateYearTotalDislocationEquals: (state, value) => { state.yearTotalDislocationEquals = value },
  updateEmphasizeFirstYearMortality: (state, value) => { state.emphasizeFirstYearMortality = value },
  resetDefaultParameters: (state, value) => { Object.assign(state, defaultParameters) },
}

export default {
  state,
  mutations,
}
