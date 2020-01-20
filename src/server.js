const express = require('express')
const routes = require('./routes')
const middleware = require('./middleware')
const { logger } = require('./aspects/logger')
const config = require('./config')
const { connectDatabase } = require('./db')

// Connect to database
connectDatabase()

const app = express()

app.use(middleware)
app.use('/status', routes.status)

app.listen(config.port, () => {
  logger.info(
    `Application is listening on port ${config.port}, environment = ${config.env}`
  )
})
