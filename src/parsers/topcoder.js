const axios = require('axios')
const { parserErrorHandler } = require('./../utils')
const PLATFORM = 'TOPCODER'
const TOPCODER_API_URL = 'https://kontests.net/api/v1/top_coder'
const topcoder = () => axios.get(TOPCODER_API_URL, { timeout: 15000 })
  .then(response =>
    response.data
      .map(contest => ({
        name: contest.name,
        url: contest.url,
        platform: 'topcoder',
        startTime: new Date(contest.start_time).getTime() / 1000,
        endTime: new Date(contest.end_time).getTime() / 1000,
      }))
  )
  .catch(parserErrorHandler(PLATFORM))
module.exports = topcoder
