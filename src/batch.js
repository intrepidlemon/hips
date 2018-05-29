import { parse } from 'json2csv'
import { run } from './simulation'

// TODO: change to 1000
const TRIALS = 1000
const DISCOUNT = "no-discounting"
const TOTAL_SUCCESS = 0
const HEMI_SUCCESS = 0
const HEMI_DISLOCATION_RATE = 0.04
const YEAR_TOTAL_FALLS_TO_HEMI = 100
const DEVICE_SURVIVAL = 0.9
const EMPHASIZE_FIRST_YEAR_MORTALITY = true

const LIFE_EXPECTANCIES = [...Array(15).keys()].map(x => x + 1)
const FAILURE_PENALTY = [ 1, 2, 3 ]
const DISLOCATION_PENALTY = [ 1, 2, 3 ]
const TOTAL_ADDITIONAL_DISLOCATION_RATE = [ 0.01, 0.02, 0.03 ]
const TOTAL_LONGEVITY = [ 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15 ]
const HEMI_LONGEVITY = [ 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15 ]

const batch = lifeExpectancy =>
  failurePenalty =>
  dislocationPenalty =>
  totalAdditionalDislocationRate =>
  totalLongevity =>
  hemiLongevity =>
  () => {
    const sum = [ ...Array(TRIALS) ].map( () =>
      run(
        lifeExpectancy,
        lifeExpectancy / 2,
        {
          totalUtils: {
            success: TOTAL_SUCCESS,
            failure: failurePenalty,
            dislocation: dislocationPenalty,
            years: totalLongevity,
          },
          hemiUtils: {
            success: HEMI_SUCCESS,
            failure: failurePenalty,
            dislocation: dislocationPenalty,
            years: hemiLongevity,
          },
        },
        {
          totalLongetivity: {
            years: totalLongevity,
            percent: DEVICE_SURVIVAL,
          },
          hemiLongetivity: {
            years: hemiLongevity,
            percent: DEVICE_SURVIVAL,
          },
        },
        {
          totalDislocationRate: totalAdditionalDislocationRate + HEMI_DISLOCATION_RATE,
          hemiDislocationRate: HEMI_DISLOCATION_RATE,
          yearTotalDislocationEquals: YEAR_TOTAL_FALLS_TO_HEMI,
        },
        DISCOUNT,
        EMPHASIZE_FIRST_YEAR_MORTALITY,
      )
    ).reduce( (all, { total , hemi }) => ({
      total: all.total + total,
      hemi: all.hemi + hemi,
    }), { total: 0, hemi: 0 })

    return {
      trials: TRIALS,
      discount: DISCOUNT,
      totalSuccess: TOTAL_SUCCESS,
      hemiSuccess: HEMI_SUCCESS,
      hemiDislocationRate: HEMI_DISLOCATION_RATE,
      yearTotalFallsToHemi: YEAR_TOTAL_FALLS_TO_HEMI,
      deviceSurvival: DEVICE_SURVIVAL,
      emphasizeFirstYearMortality: EMPHASIZE_FIRST_YEAR_MORTALITY,

      lifeExpectancy,
      failurePenalty,
      dislocationPenalty,
      totalAdditionalDislocationRate,
      totalLongevity,
      hemiLongevity,

      total: sum.total / TRIALS,
      hemi: sum.hemi / TRIALS,
    }
  }

const functions = LIFE_EXPECTANCIES
  .map(batch)
  .reduce((all, f) => [...all, ...FAILURE_PENALTY.map(f)], [])
  .reduce((all, f) => [...all, ...DISLOCATION_PENALTY.map(f)], [])
  .reduce((all, f) => [...all, ...TOTAL_ADDITIONAL_DISLOCATION_RATE.map(f)], [])
  .reduce((all, f) => [...all, ...TOTAL_LONGEVITY.map(f)], [])
  .reduce((all, f) => [...all, ...HEMI_LONGEVITY.map(f)], [])

const execute = () => {
  const output = functions.map(f => f())

  const fields = [

    'lifeExpectancy',
    'failurePenalty',
    'dislocationPenalty',
    'totalAdditionalDislocationRate',
    'totalLongevity',
    'hemiLongevity',

    'total',
    'hemi',
  ]

  const opts = { fields };

  try {
    const csv = parse(output, opts)
    console.log(csv)
  } catch (err) {
    console.error(err)
  }
}

export default execute
