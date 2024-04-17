const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({
    name:String,
    rollno:Number,
    course:String,
    mobile:Number
})

const student = mongoose.model("student",studentschema)

module.exports = student