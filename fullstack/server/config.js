const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')

const db = mongoose.connection

db.once('open',()=>console.log('connected with db'))

db.on('error',()=>console.log('connection failed with db'))

