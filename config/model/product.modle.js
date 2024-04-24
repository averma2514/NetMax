const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'seller'
    }
})

const Product = mongoose.model("product",productschema)
module.exports = Product