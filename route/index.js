const questionRouter = require('./route.question')
const userRouter = require('./route.user')
const express = require('express')
const router = express.Router()

router.use('/question', questionRouter )
router.use('/user', userRouter);

module.exports = router
