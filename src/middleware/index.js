const morgan = require('morgan')
const { logstream } = require('../aspects/logger')

module.exports = [morgan('tiny', { stream: logstream })]
