import { lifeExpectancy } from '@/utils/life'

const defaultParameters = {
  age: 65,
  years: 1,
  relativeValueOfHemi: 0.5,
  totalSuccess: 100,
  hemiSuccess: 100,
  failure: 100,
  dislocation: 5,
  failureEnduringPenalty: 1.0,
  dislocationEnduringPenalty: 0.5,
  totalImmediatePenalty: 10,
  totalLongetivityYears: 12,
  totalLongetivityPercent: 0.9,
  hemiLongetivityYears: 6,
  hemiLongetivityPercent: 0.9,
  hemiDislocationRate: 0.00,
  totalDislocationRate: 0.03,
  yearTotalDislocationEquals: 15,
  trials: 1000,
  discount: 'none',
  failureMode: 'quadratic',
  clinicalSignificance: 0.05,
  lifeExpectancyDistribution: 'empiric',
}

const state = { ...defaultParameters }

const mutations = {
  updateAge: (state, value) => { state.age = value },
  updateYears: (state, value) => { state.years = value },
  updateRelativeValueOfHemi: (state, value) => { state.relativeValueOfHemi = value },
  updateTotalSuccess: (state, value) => { state.totalSuccess = value },
  updateHemiSuccess: (state, value) => { state.hemiSuccess = value },
  updateFailure: (state, value) => { state.failure = value },
  updateDislocation: (state, value) => { state.dislocation = value },
  updateFailureEnduringPenalty: (state, value) => { state.failureEnduringPenalty = value },
  updateDislocationEnduringPenalty: (state, value) => { state.dislocationEnduringPenalty = value },
  updateTotalImmediatePenalty: (state, value) => { state.totalImmediatePenalty = value },
  updateTotalLongetivityYears: (state, value) => { state.totalLongetivityYears = value },
  updateTotalLongetivityPercent: (state, value) => { state.totalLongetivityPercent = value },
  updateHemiLongetivityYears: (state, value) => { state.hemiLongetivityYears = value },
  updateHemiLongetivityPercent: (state, value) => { state.hemiLongetivityPercent = value },
  updateHemiDislocationRate: (state, value) => { state.hemiDislocationRate = value },
  updateTotalDislocationRate: (state, value) => { state.totalDislocationRate = value },
  updateTrials: (state, value) => { state.trials = value },
  updateDiscount: (state, value) => { state.discount = value },
  updateFailureMode: (state, value) => { state.failureMode = value },
  updateClinicalSignificance: (state, value) => { state.clinicalSignificance = value },
  updateYearTotalDislocationEquals: (state, value) => { state.yearTotalDislocationEquals = value },
  updateLifeExpectancyDistribution: (state, value) => { state.lifeExpectancyDistribution = value },
  resetDefaultParameters: (state, value) => { Object.assign(state, defaultParameters) },
  calculateLifeExpectancy: (state, value) => { state.years = lifeExpectancy(state.age) },
}

export default {
  state,
  mutations,
}
