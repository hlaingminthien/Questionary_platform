const {userController} = require('../controller')
const express = require("express")
const router = express.Router()

router.post("/survey",userController.setUser);

module.exports = router