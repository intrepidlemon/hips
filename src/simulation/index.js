import { normalize } from './random'
import simulate, { incrementalGain } from './simulate'
import utilities from './utilities'
import * as probabilities from './probabilities'

export const run = (
  years,
  std,
  { totalUtils, hemiUtils },
  { totalLongetivity, hemiLongetivity },
  { totalDislocationRate, hemiDislocationRate },
  useIncrementalGain
) => {
  years = normalize({ mean: years, std: std })

  const { total: totalDislocation, hemi: hemiDislocation } = probabilities.dislocation({ total: totalDislocationRate, hemi: hemiDislocationRate })
  const { total: totalFailure, hemi: hemiFailure } = probabilities.failure({ total: totalLongetivity, hemi: hemiLongetivity })

  const totalIncrementalGainFactor = useIncrementalGain ? incrementalGain() : () => 1
  const hemiIncrementalGainFactor = useIncrementalGain ? incrementalGain() : () => 1

  return {
    total: simulate(years, utilities(totalUtils), { dislocation: totalDislocation, failure: totalFailure }, totalIncrementalGainFactor),
    hemi: simulate(years, utilities(hemiUtils), { dislocation: hemiDislocation, failure: hemiFailure }, hemiIncrementalGainFactor)
  }
}

export * from './probabilities'
export { default as utilities } from './utilities'
export { default as simulate } from './simulate'
