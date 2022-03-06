// dislocationUtil returns the utility of a dislocation
const dislocationUtil = (success, penalty) => () => success - penalty

// failureUtil returns the utility of a failure
const failureUtil = (success, penalty) => () => success - penalty

// discount the success utility every year until the user supplied device longetivity year
const discountFunction = ({ years }) => {
  const constant = 6 / (years * (years + 1) * (2 * years + 1))
  return year => year ** 2 * constant
}

// successUtil returns the utility for a success for a year
// at the end of device longetivity (YEARS), the utility of the device should be discounted to zero
// immediatePenalty is only applied the very first run of the curried function. Will apply 0 penalty in subsequent runs
const successUtil = (maxUtil, years, immediatePenalty, utilityConsumption) => {
  let util = maxUtil
  if (utilityConsumption === 'quadratic') {
    const discountFunc = discountFunction({ years })
    let i = 0
    return () => {
      util -= maxUtil * discountFunc(i) + immediatePenalty
      i += 1
      immediatePenalty = 0
      return Math.max(0, util)
    }
  }
  if (utilityConsumption === 'linear') {
    return () => {
      util -= maxUtil / years + immediatePenalty
      immediatePenalty = 0
      return Math.max(0, util)
    }
  }
}

const utilities = ({
  success = 100,
  dislocation = 5,
  failure = 100,
  years = 10,
  immediatePenalty = 0,
  utilityConsumption = 'quadratic',
}) => ({
  success: successUtil(success, years, immediatePenalty, utilityConsumption),
  dislocation: dislocationUtil(success, dislocation),
  failure: failureUtil(success, failure),
})

export default utilities
