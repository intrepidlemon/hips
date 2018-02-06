// dislocationUtil returns the utility of a dislocation
const dislocationUtil = util => () => util

// failureUtil returns the utility of a failure
const failureUtil = util => () => util

// successUtil returns the utility for a success for a year
const successUtil = maxUtil => {
  let util = maxUtil
  // we're going to subtract 1 on the first try
  util = util + 1
  let i = 0
  return () => {
    i += 1
    const value = util - i
    return value > maxUtil / 2 ? value : maxUtil / 2
  }
}

const utilities = ({ success = 5, dislocation = 0, failure = -5 }) => ({
  success: successUtil(success),
  dislocation: dislocationUtil(dislocation),
  failure: failureUtil(failure)
})

export default utilities
