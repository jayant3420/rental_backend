"use strict"
const express = require('express')
const router = express.Router()
const AuthController = require('../controller/auth.controller')

router.get("/testing", AuthController.testing)

module.exports = router