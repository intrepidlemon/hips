import Vue from 'vue'
import Vuex from 'vuex'
import parameters from './modules/parameters'
import results from './modules/results'
import ui from './modules/ui'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    parameters,
    results,
    ui,
  },
  strict: debug,
})
