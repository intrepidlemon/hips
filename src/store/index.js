import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import parameters from './modules/parameters'
import results from './modules/results'
import ui from './modules/ui'
import settings from './modules/settings'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    parameters,
    results,
    ui,
    settings,
  },
  plugins: [createPersistedState({
    key: 'hips-vuex',
    paths: [
      'parameters',
      'settings',
    ],
  })],
  strict: debug,
})
