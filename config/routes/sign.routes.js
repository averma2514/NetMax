const express = require('express')
const router = express.Router()

const {getLoginSeller,postLoginSeller,getSellerSignup,postSellerSignup, postSignup, getSignup, getLogin, postLogin} = require('../controller/login.controller')

//seller login
router.get('/sellerlogin',getLoginSeller)
router.post('/sellerlogin',postLoginSeller)

//seller signup
router.get('/sellersignup',getSellerSignup)
router.post('/sellersignup',postSellerSignup)

//buyer signup
router.get('/signup',getSignup)
router.post('/signup',postSignup)

//buyer login
router.get('/login',getLogin)
router.post('/login',postLogin)

// router.get('/account',getAccount)
// router.get('/logout',logout)

module.exports = router