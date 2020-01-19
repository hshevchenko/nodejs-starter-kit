const PRODUCTION = 'production'
const DEV = 'development'

const config = {
  env: process.env.NODE_ENV || DEV,
  port: process.env.PORT || 3000,
}

const isProduction = () => {
  return config.env === PRODUCTION
}

module.exports = {
  ...config,
  isProduction
}
