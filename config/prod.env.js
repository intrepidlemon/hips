'use strict'
const credentials = require('./.credentials.json')

module.exports = {
  NODE_ENV: '"production"',
  CTF_SPACE_ID: '"' + credentials.CTF_SPACE_ID + '"',
  CTF_CDA_ACCESS_TOKEN: '"' + credentials.CTF_CDA_ACCESS_TOKEN + '"',
  MIXPANEL_TOKEN: '"' + credentials.MIXPANEL_TOKEN + '"',
  SEGMENT_TOKEN: '"' + credentials.SEGMENT_TOKEN + '"',
}
