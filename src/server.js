const express = require('express')
const routes = require('./routes')
const middleware = require('./middleware')
const { logger } = require('./middleware/logger')
const { env } = require('./config')

const app = express()

app.use(middleware)
app.use('/status', routes.status)

const port = process.env.PORT || 3000

app.listen(port, () => {
  logger.info(
    `Application is listening on port ${port}, environment = ${env()}`
  )
})
