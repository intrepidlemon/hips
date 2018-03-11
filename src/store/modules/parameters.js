const state = {
  years: 5,
  relativeValueOfHemi: 0.5,
  totalSuccess: 100,
  hemiSuccess: 100,
  failure: 0,
  dislocation: 5,
  totalLongetivityYears: 12,
  totalLongetivityPercent: 0.8,
  hemiLongetivityYears: 6,
  hemiLongetivityPercent: 0.8,
  hemiDislocationRate: 0.10,
  totalDislocationRate: 0.14,
  trials: 1000,
  useIncrementalGain: false,
}

const mutations = {
  updateYears: (state, value) => { state.years = value },
  updateRelativeValueOfHemi: (state, value) => { state.relativeValueOfHemi = value },
  updateTotalSuccess: (state, value) => { state.totalSuccess = value },
  updateHemiSuccess: (state, value) => { state.hemiSuccess = value },
  updateFailure: (state, value) => { state.failure = value },
  updateDislocation: (state, value) => { state.dislocation = value },
  updateTotalLongetivityYears: (state, value) => { state.totalLongetivityYears = value },
  updateTotalLogetivityPercent: (state, value) => { state.totalLongetivityPercent = value },
  updateHemiLongetivityYears: (state, value) => { state.hemiLongetivityYears = value },
  updateHemiLongetivityPercent: (state, value) => { state.hemiLongetivityPercent = value },
  updateHemiDislocationRate: (state, value) => { state.hemiDislocationRate = value },
  updateTotalDislocationRate: (state, value) => { state.totalDislocationRate = value },
  updateTrials: (state, value) => { state.trials = value },
  updateUseIncrementalGain: (state, value) => { state.useIncrementalGain = value },
}

export default {
  state,
  mutations,
}
