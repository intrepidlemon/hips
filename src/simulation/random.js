import { jStat as stat } from 'jStat'

export const normalize = ({ mean, std = 0.5 }) => stat.normal.sample(mean, std)

export const equalDistribution = ({ ceiling = 100 }) => Math.floor(Math.random() * ceiling)
