// totalDislocation returns the probably of dislocation for a total hip replacement
const totalDislocation = prob => () => prob

// hemiDislocation returns the probably of dislocation for a total hip replacement
const hemiDislocation = prob => () => prob

// totalFailure returns the probability of failure for a total hip replacement
// given the number of `years` that some `percent` of devices will survive
// e.g. if by 10 years, 90% of devices survive, then years=10 and percent=0.90
const totalFailure = ({ years, percent }) => {
  // TODO: figure out this calculation
  return () => {
    return 0.3
  }
}

// hemiFailure returns the probability of failure for a total hip replacement
// given the number of `years` that some `percent` of devices will survive
// e.g. if by 10 years, 90% of devices survive, then years=10 and percent=0.90
const hemiFailure = ({ years, percent }) => {
  // TODO: figure out this calculation
  return () => {
    return 0.3
  }
}

export const dislocation = ({ total, hemi }) => ({
  total: totalDislocation(total),
  hemi: hemiDislocation(hemi)
})

export const failure = ({ total, hemi }) => ({
  total: totalFailure(total),
  hemi: hemiFailure(hemi)
})
