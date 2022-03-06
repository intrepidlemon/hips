import { determinedYearsToLive } from './life'
import simulate, { hyperbolicDiscount, modifiedHyperbolicDiscount } from './simulate'
import utilities from './utilities'
import * as probabilities from './probabilities'

export const run = (
  years,
  { totalUtils, hemiUtils },
  { totalLongetivity, hemiLongetivity },
  { totalDislocationRate, hemiDislocationRate, yearTotalDislocationEquals },
  discount,
  failureMode,
  lifeExpectancyDistribution,
  failureEnduringPenalty,
  dislocationEnduringPenalty,
) => {
  years = determinedYearsToLive(years, lifeExpectancyDistribution)

  const { total: totalDislocation, hemi: hemiDislocation } = probabilities.dislocation({ total: totalDislocationRate, hemi: hemiDislocationRate, yearToEqual: yearTotalDislocationEquals })
  const { total: totalFailure, hemi: hemiFailure } = probabilities.failure({ total: totalLongetivity, hemi: hemiLongetivity, mode: failureMode })

  let totalDiscount = () => 1
  let hemiDiscount = () => 1
  switch (discount) {
    case 'hyperbolic':
      totalDiscount = hyperbolicDiscount()
      hemiDiscount = hyperbolicDiscount()
      break
    case 'modified-hyperbolic':
      totalDiscount = modifiedHyperbolicDiscount()
      hemiDiscount = modifiedHyperbolicDiscount()
      break
    default:
      break
  }

  const totalUtility = simulate(
    years,
    utilities(totalUtils),
    { dislocation: totalDislocation, failure: totalFailure },
    totalDiscount,
    failureEnduringPenalty,
    dislocationEnduringPenalty,
    false,
    false,
  )
  const hemiUtility = simulate(
    years,
    utilities(hemiUtils),
    { dislocation: hemiDislocation, failure: hemiFailure },
    hemiDiscount,
    failureEnduringPenalty,
    dislocationEnduringPenalty,
    false,
    false,
  )

  return {
    total: totalUtility,
    hemi: hemiUtility,
  }
}

export * from './probabilities'
export { default as utilities } from './utilities'
export { default as simulate } from './simulate'
