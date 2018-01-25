import { jStat as stat } from 'jStat'

export const normalize = ({ mean, std = 0.5 }) => stat.normal.sample(mean, std)
