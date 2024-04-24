const express = require('express')
const app = express()
const db = require('./config/db.cofig')
const cookieParser = require('cookie-parser')
// const middleware = require('./midleware/auth.middalware')

const DOTENV = require('dotenv').config()
const PORT = process.env.PORT || 8080

app.use(express.json())
// app.use(express.static(__dirname+'public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")

app.use(cookieParser())

app.get('/' , (req , res) => {
    res.send('welcome')
})

// app.use('/student',require('./routes/students.routs'))
// app.use('/product',require('./routes/product.routes'))

// app.use('/product',middleware,require('./routes/product.routes'))
app.use('/signin',require('./routes/sign.routes'))
// app.use('/seller',require('./routes/seller.routes'))


app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})