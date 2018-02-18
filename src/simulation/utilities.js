// dislocationUtil returns the utility of a dislocation
const dislocationUtil = util => () => util

// failureUtil returns the utility of a failure
const failureUtil = util => () => util

const discountFunction = ({ years }) => {
  const constant = 6 / (years * (years + 1) * (2 * years + 1))
  return year => year ** 2 * constant
}

// successUtil returns the utility for a success for a year
const successUtil = (maxUtil, years) => {
  let util = maxUtil
  const discountFunc = discountFunction({ years })
  let i = 0
  return () => {
    util -= maxUtil / 2 * discountFunc(i)
    i += 1
    return util > maxUtil / 2 ? util : maxUtil / 2
  }
}

const utilities = ({ success = 100, dislocation = 5, failure = 0, years = 10 }) => ({
  success: successUtil(success, years),
  dislocation: dislocationUtil(dislocation),
  failure: failureUtil(failure)
})

export default utilities
