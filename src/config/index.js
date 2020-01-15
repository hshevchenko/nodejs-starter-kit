const PRODUCTION = 'production'
const DEV = 'development'

const env = () => {
  return process.env.NODE_ENV || DEV
}

const isProduction = () => {
  return env() === PRODUCTION
}

module.exports = {
  env,
  isProduction
}
