const express = require('express')
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname +'/public'))
app.use(express.json())
const port = 1000

const db = require('./config/db.config')

app.use('/blog',require('./router/blog.router'))
// app.use('/signin',require('./router/login.router'))

app.listen(port,()=>{
    console.log('server started on 1k')
})