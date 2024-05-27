const express = require('express')
const routes = express.Router()
const {getProduct} = require('../controller/product.controller')

routes.get('/',getProduct)


// routes.post('/addseller',addSeller)
// routes.put('/update/:id',updateproduct)

module.exports = routes