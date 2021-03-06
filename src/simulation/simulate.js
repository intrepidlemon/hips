const NPV_DISCOUNT = 0.97

export const hyperbolicDiscount = () => {
  let i = 0
  return () => {
    i += 1
    return 1 / i
  }
}

export const modifiedHyperbolicDiscount = () => {
  let i = 0
  return () => {
    i += 1
    return (i + 1) / (2 * i)
  }
}

// simulate is a recursive function that calculates the
// of a device year after year
const simulate = (years, utilities, probabilities, discount) => {
  const {
    dislocation: dislocationUtil,
    failure: failureUtil,
    success: successUtil,
  } = utilities

  const {
    dislocation: dislocationProb,
    failure: failureProb,
  } = probabilities

  const pDislocation = dislocationProb()
  const pFailure = failureProb()
  const pSuccess = 1 - pDislocation - pFailure

  let total = 0
  total += pDislocation * dislocationUtil()
  total += pFailure * failureUtil()
  total += pSuccess * successUtil()

  total *= discount()

  if (years > 0) {
    return total + NPV_DISCOUNT * simulate(years - 1, utilities, probabilities, discount)
  }
  return total
}

export default simulate
