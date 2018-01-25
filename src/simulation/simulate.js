// simulate is a recursive function that calculates the
// of a device year after year
const simulate = (years, utilities, probabilities) => {
  const {
    dislocation: dislocationUtil,
    failure: failureUtil,
    success: successUtil
  } = utilities

  const {
    dislocation: dislocationProb,
    failure: failureProb
  } = probabilities

  const pDislocation = dislocationProb()
  const pFailure = failureProb()
  const pSuccess = 1 - pDislocation - pFailure

  let total = 0
  total += pDislocation * dislocationUtil()
  total += pFailure * failureUtil()
  total += pSuccess * successUtil()

  if (years > 0) {
    return total + simulate(years - 1, utilities, probabilities)
  }
  return total
}

export default simulate
