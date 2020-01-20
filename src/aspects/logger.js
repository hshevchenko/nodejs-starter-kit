const { isProduction } = require('../config')
const { createLogger, transports, format } = require('winston')
const { Loggly } = require('winston-loggly-bulk')

const levelByEnv = () => {
  if (isProduction()) {
    return 'info'
  }

  return 'silly'
}

const transportsByEnv = () => {
  const _transports = [new transports.Console()]

  if (isProduction()) {
    _transports.push(
      new Loggly({
        token: '3ce84ef4-239c-47e5-9f2b-365ddf07170c',
        subdomain: 'olena',
        json: true,
        tags: ['nodejs-starter-kit']
      })
    )
  } else {
    _transports.push(new transports.File({ filename: './logs/app.log' }))
  }

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

const logstream = {
  write: (message, encoding) => {
    logger.info(message)
  }
}

module.exports = { logger, logstream }
