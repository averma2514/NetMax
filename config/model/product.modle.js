const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        max:200
    },
    image:{
        type:String,
        required:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

const Product = mongoose.model("product",productschema)
module.exports = Product
