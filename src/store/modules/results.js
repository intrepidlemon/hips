import { average } from '@/utils/array'

const state = {
  total: [],
  hemi: [],
}

const mutations = {
  clear: (state) => {
    state.total = []
    state.hemi = []
  },
  pushTotal: (state, value) => {
    state.total.push(value)
  },
  pushHemi: (state, value) => {
    state.hemi.push(value)
  },
}

const getters = {
  averageTotal: state => average(state.total),
  averageHemi: state => average(state.hemi),
}

export default {
  state,
  mutations,
  getters,
}
