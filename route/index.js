const questionRouter = require('./route.question')
const express = require('express')
const router = express.Router()

router.use('/question', questionRouter )

module.exports = router
