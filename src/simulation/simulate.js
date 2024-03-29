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

// simulate is a recursive function that calculates the utility
// of a device year after year
const simulate = (
  years,
  utilities,
  probabilities,
  discount,
  failureEnduringPenalty,
  dislocationEnduringPenalty,
  failed,
  dislocated,
) => {
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

  let total = 0
  const fUtil = failureUtil()
  const dUtil = dislocationUtil()
  const sUtil = successUtil()
  if (Math.random() < pFailure) {
    total += fUtil
    failed = true
  } else if (Math.random() < pDislocation) {
    total += dUtil
    dislocated = true
  } else {
    total += sUtil
  }

  total *= discount()

  if (failed) {
    total *= 1 - failureEnduringPenalty
  }
  if (dislocated) {
    total *= 1 - dislocationEnduringPenalty
  }

  if (years > 0) {
    return total + NPV_DISCOUNT * simulate(
      years - 1,
      utilities,
      probabilities,
      discount,
      failureEnduringPenalty,
      dislocationEnduringPenalty,
      failed,
      dislocated,
    )
  }
  return total
}

export default simulate
