const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
        max:200
    },
    img:{
        type:String,
        require:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'seller'
    }
})

const Product = mongoose.model("product",productschema)
module.exports = Product
