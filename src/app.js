const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const api = require('./api/index')
const { logger, productionErrors } = require('./util')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send('app home')
})

app.use('/api', api)

app.use(productionErrors)

app.listen(80, () => {
  logger.info(`Server start! listening on 80`)
})

module.exports = app
