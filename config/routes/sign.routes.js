const express = require('express')
const router = express.Router()

const {showsignin,postsignin,postLogin} = require('../controller/login.controller')

router.get('/signin',showsignin)
router.post('/postsignin',postsignin)
router.post('/login', postLogin)

module.exports = router