const express = require('express')
const router = express.Router()

const {showhomepage,addblog,addblogdata,readmore} = require('../controller/blog.controller')

router.get('/home',showhomepage)
router.get('/addblog',addblog)
router.post('/addblog',addblogdata)
router.get('/home/:id',readmore)



module.exports = router