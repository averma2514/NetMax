const express = require('express')
const router = express.Router()

const {showlogin,postlogin} = require('../controller/login.controller')

router.get('/login',showlogin)
router.post('login',postlogin)

module.exports = router
