// const EventEmitter = require('events')
// const events = new EventEmitter()

// events.on('pizzaorder',()=>{
//     console.log('ordring pizza...')
// })

// events.emit('pizzaorder')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')
const mongodb = mongoose.connection

mongodb.once('open',()=>{
    console.log('connected with mongo')
})

mongodb.on('error',()=>{
    console.log('error in connection')
})
