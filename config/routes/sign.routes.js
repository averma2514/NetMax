const express = require('express')
const router = express.Router()

const {showsignin,postsignin} = require('../controller/login.controller')

router.get('/signin',showsignin)
router.post('/postsignin',postsignin)

module.exports = router