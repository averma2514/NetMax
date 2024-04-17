const express = require('express')
const routes = express.Router()

const {viewProduct,addProduct,deleteProduct,showsearch,searchProduct} = require('../controler/product')

routes.get('/viewproduct',viewProduct)
routes.get('/addproduct',addProduct)
routes.get('/deleteproduct',deleteProduct)
routes.get('/showsearch',showsearch)
// routes.get('/searchproduct',searchProduct)

module.exports = routes