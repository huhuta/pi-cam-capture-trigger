const router = require('express').Router()
const { catchErrors } = require('../../util')

const { capture } = require('./capture')

router.get('/:section', catchErrors(capture))
router.get('/:section/:label', catchErrors(capture))

module.exports = router
