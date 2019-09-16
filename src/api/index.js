const router = require('express').Router({ mergerParams: true })
const captureRouter = require('./capture/router')

router.get('/', (_, res) => {
  res.send('api home')
})

router.use('/capture', captureRouter)

module.exports = router
