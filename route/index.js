const questionRouter = require('./route.question')
const userRouter = require('./route.user')
const express = require('express')
const router = express.Router()

router.use('/questions', questionRouter );
router.use('/answers', questionRouter);
router.use('/user', userRouter);

module.exports = router
