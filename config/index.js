const express = require('express')
const app = express()
const port = 4000
const db = require('./config/db.cofig')
app.use(express.json())
// app.use(express.static(__dirname+'public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")

app.use('/student',require('./routes/students.routs'))
app.use('/product',require('./routes/product.routes'))
app.use('/signin',require('./routes/sign.routes'))


app.listen(port,()=>{
    console.log('server started on 4k')
})