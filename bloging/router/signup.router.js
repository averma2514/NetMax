const express = require('express')
const router = express.Router()

const {getSignup,postSignup} = require('../controller/signup.controller')

router.get('/',getSignup)
router.post('/',postSignup)

module.exports = router
