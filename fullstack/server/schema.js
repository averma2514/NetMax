const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    status:{
        type:Boolean
    }
})

const TODO = mongoose.model('todos',todoSchema)

module.exports = {TODO}