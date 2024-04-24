const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    city:String
})

const Seller = mongoose.model("seller",sellerSchema)

module.exports = Seller