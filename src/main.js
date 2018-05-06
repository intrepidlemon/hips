// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SemanticUI from 'semantic-ui-vue'
import ContentfulVue from 'contentful-vue'

import App from './App'
import router from './router'
import store from './store'

import 'semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false

Vue.use(SemanticUI)
Vue.use(ContentfulVue, {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
