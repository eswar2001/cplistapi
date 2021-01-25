const axios = require('axios')
const { parserErrorHandler } = require('./../utils')
const PLATFORM = 'KICKSTART'
const KICKSTART_API_URL = 'https://kontests.net/api/v1/kick_start'
const kickstart = () => axios.get(KICKSTART_API_URL, { timeout: 15000 })
    .then(response =>
        response.data
            .map(contest => ({
                name: contest.name,
                url: contest.url,
                platform: 'Kick_Start',
                startTime: new Date(contest.start_time).getTime() / 1000,
                endTime: new Date(contest.end_time).getTime() / 1000,
            }))
    )
    .catch(parserErrorHandler(PLATFORM))
module.exports = kickstart

