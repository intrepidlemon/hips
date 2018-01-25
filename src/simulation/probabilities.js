// totalDislocation returns the probably of dislocation for a total hip replacement
const totalDislocation = () => 0.3

// totalFailure returns the probability of failure for a total hip replacement
const totalFailure = () => 0.3

// hemiDislocation returns the probably of dislocation for a total hip replacement
const hemiDislocation = () => 0.2

// hemiFailure returns the probability of failure for a total hip replacement
const hemiFailure = () => 0.4

export const hemiProbFunctions = {
  dislocation: hemiDislocation,
  failure: hemiFailure
}

export const totalProbFunctions = {
  dislocation: totalDislocation,
  failure: totalFailure
}
