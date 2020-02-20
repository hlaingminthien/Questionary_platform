const {userController} = require('../controller')
const express = require("express")
const router = express.Router()

router.get('/survey/:id',userController.getQuestion);

module.exports = router