const express = require('express')
const router = express.Router()

const {showsignin,postsignin,postLogin,getAccount,logout} = require('../controller/login.controller')

router.get('/signin',showsignin)
router.post('/postsignin',postsignin)
// router.get('/login',getlogin)
router.post('/login', postLogin)
router.get('/account',getAccount)
router.get('/logout',logout)

module.exports = router