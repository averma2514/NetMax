const express = require('express')
const server = express()
const cors = require('cors')
const config = require('./config')
server.use(cors())

server.use('/todo',require('./router/user.router'))

server.listen(4000,()=>{
    console.log(`server started at 4000`)
})
