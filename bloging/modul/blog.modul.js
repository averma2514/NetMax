const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
    name:String,
    title:String,
    contant:String
})

const Blog = mongoose.model("blog",blogschema)

module.exports = Blog
