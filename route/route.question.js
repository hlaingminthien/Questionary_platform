const {questionController} = require('../controller')
const express = require("express")
const router = express.Router()

router.get('/survey/:id',questionController.getQuestion);
router.post('/survey', questionController.saveAnswers);

module.exports = router