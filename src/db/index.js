const mongoose = require('mongoose')
const config = require('../config')
const { logger } = require('../aspects/logger')

const connectDatabase = async (uri = config.database_url) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })

    logger.debug('Connected to database')
  } catch (err) {
    if (err) {
      logger.error('Failed to connect to database')
      process.exit(1)
    }
  }
}

module.exports = {
  connectDatabase
}
