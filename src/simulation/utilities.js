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
const successUtil = (maxUtil, years) => {
  let util = maxUtil
  const discountFunc = discountFunction({ years })
  let i = 0
  return () => {
    util -= maxUtil * discountFunc(i)
    i += 1
    return Math.max(0, util)
  }
}

const utilities = ({ success = 100, dislocation = 5, failure = 100, years = 10 }) => ({
  success: successUtil(success, years),
  dislocation: dislocationUtil(success, dislocation),
  failure: failureUtil(success, failure),
})

export default utilities
