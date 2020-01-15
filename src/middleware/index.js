const morgan = require('morgan')
const { logstream } = require('./logger')

module.exports = [morgan('tiny', { stream: logstream })]
