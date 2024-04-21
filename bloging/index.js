const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname +'/public'))
app.use(express.json())

app.set("view engine","ejs")
require("dotenv").config();
// const cookieParser =

const port = 1000

const db = require('./config/db.config')

app.use('/signup',require('./router/signup.router'))
app.use('/login',require('./router/login.router'))
app.use('/blog',require('./router/blog.router'))

app.listen(port,()=>{
    console.log('server started on 1k')
})