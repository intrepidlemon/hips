import { normalize } from './random'
import simulate, { hyperbolicDiscount, modifiedHyperbolicDiscount } from './simulate'
import utilities from './utilities'
import * as probabilities from './probabilities'

export const run = (
  years,
  std,
  { totalUtils, hemiUtils },
  { totalLongetivity, hemiLongetivity },
  { totalDislocationRate, hemiDislocationRate },
  discount,
) => {
  years = normalize({ mean: years, std: std })

  const { total: totalDislocation, hemi: hemiDislocation } = probabilities.dislocation({ total: totalDislocationRate, hemi: hemiDislocationRate })
  const { total: totalFailure, hemi: hemiFailure } = probabilities.failure({ total: totalLongetivity, hemi: hemiLongetivity })

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
