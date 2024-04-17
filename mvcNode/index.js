const express  = require('express')
const app = express()
const port = 3000

app.set('view engine',"ejs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use('/',require(''))

app.use('/product',require('./routes/product'))
app.use('/task',require('./routes/task'))

//add and show user from db.js
// app.use('/user',)

app.listen(port,()=>{
    console.log('server started at port 3k')
})