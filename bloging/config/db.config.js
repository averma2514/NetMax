const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog')
const mongodb = mongoose.connection

mongodb.once('open',()=>{
    console.log('connect sucessfully')
})

mongodb.on('error',()=>{
    console.log('connection failed')
})