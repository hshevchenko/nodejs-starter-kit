const { isProduction } = require('../config')
const { createLogger, transports, format } = require('winston')

const levelByEnv = () => {
  if (isProduction()) {
    return 'info'
  }

  return 'silly'
}

const transportsByEnv = () => {
  const _transports = [
    new transports.Console(),
    new transports.File({ filename: './logs/app.log' })
  ]

  return _transports
}

const formatByEnv = () => {
  const timestamp = format.timestamp({
    format: 'YYYY-MMM-DD HH:mm:ss'
  })

  if (isProduction()) {
    return format.combine(timestamp, format.json())
  }

  return format.combine(
    timestamp,
    format.printf(info => {
      return `[${info.level.toUpperCase()}] ${info.timestamp} ${info.message}`
    })
  )
}

const logger = createLogger({
  level: levelByEnv(),
  transports: transportsByEnv(),
  format: formatByEnv()
})

module.exports = logger
