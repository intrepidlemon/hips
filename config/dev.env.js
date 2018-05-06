'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const credentials = require('./.credentials.json')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CTF_SPACE_ID: '"' + credentials.CTF_SPACE_ID + '"',
  CTF_CDA_ACCESS_TOKEN: '"' + credentials.CTF_CDA_ACCESS_TOKEN + '"',
  MIXPANEL_TOKEN: '"' + credentials.MIXPANEL_TOKEN + '"',
})
