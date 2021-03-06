import { normalize } from './random'
import simulate, { hyperbolicDiscount, modifiedHyperbolicDiscount } from './simulate'
import utilities from './utilities'
import * as probabilities from './probabilities'

export const run = (
  years,
  std,
  { totalUtils, hemiUtils },
  { totalLongetivity, hemiLongetivity },
  { totalDislocationRate, hemiDislocationRate, yearTotalDislocationEquals },
  discount,
  failureMode,
  emphasizeFirstYearMortality,
) => {
  if (emphasizeFirstYearMortality && Math.random() < 0.2) {
    years = 1
  } else {
    years = normalize({ mean: years, std: std })
  }

  // if during this round, patient dies, no utility
  if (years < 0) {
    return {
      total: 0.0,
      hemi: 0.0,
    }
  }

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
  }

  return {
    total: simulate(years, utilities(totalUtils), { dislocation: totalDislocation, failure: totalFailure }, totalDiscount),
    hemi: simulate(years, utilities(hemiUtils), { dislocation: hemiDislocation, failure: hemiFailure }, hemiDiscount),
  }
}

export * from './probabilities'
export { default as utilities } from './utilities'
export { default as simulate } from './simulate'
