const PRODUCTION = 'production'
const DEV = 'development'

const config = {
  env: process.env.NODE_ENV || DEV,
  port: process.env.PORT || 3000,
  database_url:
    process.env.DATABASE_URL ||
    'mongodb+srv://admin:admin@cluster0-amswl.mongodb.net/test?retryWrites=true&w=majority'
}

const isProduction = () => {
  return config.env === PRODUCTION
}

module.exports = {
  ...config,
  isProduction
}
