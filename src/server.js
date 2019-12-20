const express = require('express')
const middleware = require('./middleware')

const app = express()

app.use(middleware)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`)
})
