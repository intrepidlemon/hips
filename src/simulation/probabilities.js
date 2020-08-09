// totalDislocation returns the probably of dislocation for a total hip replacement
const totalDislocation = (total, hemi, years) => {
  let i = 0 // is the current year
  return () => {
    i += 1
    if (i < years) {
      return total
    } else {
      return hemi
    }
  }
}

// hemiDislocation returns the probably of dislocation for a total hip replacement
const hemiDislocation = prob => () => prob

const failureFunction = ({ years, percent, mode = 'quadratic' }) => {
  const quadratic = 3 * (1 - percent) / (years ** 3)
  const linear = 2 * (1 - percent) / (years ** 2)
  const constant = (mode === 'quadratic') ? quadratic : linear
  return year => year ** 2 * constant
}

// failureGenerator returns the probability of failure for a hip replacement
// given the number of `years` that some `percent` of devices will survive
// e.g. if by 10 years, 90% of devices survive, then years=10 and percent=0.90
const failureGenerator = ({ years, percent }, mode) => {
  const func = failureFunction({ years, percent, mode })
  const maxFailure = func(years)
  let i = 0 // is the current year
  return () => {
    i += 1
    if (i < years) {
      return func(i)
    } else {
      return maxFailure
    }
  }
}

export const dislocation = ({ total, hemi, yearToEqual }) => ({
  total: totalDislocation(total, hemi, yearToEqual),
  hemi: hemiDislocation(hemi),
})

export const failure = ({ total, hemi, mode = 'quadratic' }) => ({
  total: failureGenerator(total, mode),
  hemi: failureGenerator(hemi, mode),
})
