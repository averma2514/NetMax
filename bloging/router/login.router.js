const express = require('express')
const router = express.Router()

const {showlogin,postlogin} = require('../controller/login.controller')

router.get('/',showlogin)
router.post('',postlogin)

module.exports = router
