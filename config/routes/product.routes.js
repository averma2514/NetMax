const express = require('express')
const routes = express.Router()
const {getproduct,postproduct,updateproduct} = require('../controller/product.controller')

routes.get('/',getproduct)
routes.post('/',postproduct)
routes.put('/update/:id',updateproduct)

module.exports = routes