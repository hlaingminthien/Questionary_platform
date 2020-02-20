const {questionController} = require('../controller')
const express = require("express")
const router = express.Router()

router.get('/survey/:id',questionController.getQuestion);

module.exports = router