const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const User = mongoose.model("login",userSchema)
module.exports = User