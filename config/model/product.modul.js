const mongoose = require('mongoose')

const productschema =new mongoose.Schema({
    name:String,
    price:Number,
    category:String
})

const product = mongoose.model("Product",productschema)

module.exports = product