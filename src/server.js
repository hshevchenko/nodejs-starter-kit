const express = require('express')
const middleware = require('./middleware')
const routes = require('./routes')

const app = express()

app.use(middleware)
app.use('/status', routes.status)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`)
})
