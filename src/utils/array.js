export const average = arr => arr.length === 0
  ? null
  : arr.reduce((p, c) => p + c, 0) / arr.length

export const min = arr => Math.min(...arr)

export const max = arr => Math.max(...arr)
