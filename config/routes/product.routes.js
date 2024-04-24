const express = require('express')
const routes = express.Router()
const {getproduct,updateproduct,addSeller,addProduct} = require('../controller/product.controller')

routes.get('/',getproduct)

// routes.post('/addseller',addSeller)
// routes.put('/update/:id',updateproduct)

module.exports = routes