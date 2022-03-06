import { normalize, equalDistribution } from './random'

// life expectancy distribution based on male VA data
const distribution = [
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  4,
  5,
  7,
  8,
  10,
  12,
  10,
  8,
  7,
  5,
  4,
  3,
  3,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
]

const createNewDistribution = (years) => {
  const steps = 15 - years
  const first = distribution.slice(0, steps).reduce((a, b) => a + b, 0)
  const rest = distribution.slice(steps)
  const newDistribution = [first, ...rest]
  return newDistribution
}

export const distributions = [...Array(16).keys()].map(k => createNewDistribution(k))

// determine how many more years this particular person will have to live based on life expectancy
export const determinedYearsToLive = (lifeExpectancy, lifeExpectancyDistribution) => {
  if (lifeExpectancyDistribution === 'empiric') {
    let diceRollTotal = equalDistribution({})
    const currentDistribution = distributions[lifeExpectancy]

    let i = 0
    while (diceRollTotal > 0) {
      diceRollTotal = diceRollTotal - currentDistribution[i]
      i++
    }
    return i
  } else if (lifeExpectancyDistribution === 'normal') {
    const std = 8 // per Dr. Bernstein
    let years = normalize({ mean: lifeExpectancy, std: std })
    if (years < 0) {
      return 0
    }
    return years
  }
  return 0
}
