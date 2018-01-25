import { normalize } from './random'
import simulate from './simulate'
import utilities from './utilities'
import * as probabilities from './probabilities'

export const run = (years, std, utils) => {
  years = normalize({ mean: years, std: std })

  return {
    total: simulate(years, utilities(utils), probabilities.totalProbFunctions),
    hemi: simulate(years, utilities(utils), probabilities.hemiProbFunctions)
  }
}

export * from './probabilities'
export { default as utilities } from './utilities'
export { default as simulate } from './simulate'
