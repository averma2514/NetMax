const express = require('express')

const app = express()
const port = 3000
const {fetchdata} = require('./utils')
app.set('view engine',"ejs")

app.use(express.json())
app.use(express.urlencoded({extended:false}))


let arr = [{name:'aman',age:21},{name:'amit',age:12}]


app.get('/home',async(req,res)=>{
    // res.send('hi welcome to node app')
    // console.log(arr)
    // const products  = await fetch('https://fakestoreapi.com/products')
    const products  = await fetch('https://reqres.in/api/users?page=2')
    const productsdata = await products.json()
    
    res.render('base',{data:productsdata})
    // console.log(productsdata)
})

app.get('/quotes',async(req,res)=>{

    const data = await fetchdata('https://dummyjson.com/quotes')
    res.render('quotes',{data})
})

app.get('/user', async(req,res)=>{
    const data = await fetchdata('https://dummyjson.com/users')
    res.render('user',{data})
})

app.get('/user/:id', async(req,res)=>{
    const id = req.params.id
    const data = await fetchdata(`https://dummyjson.com/users/${id}`)
    res.render('userdetails',{data})
})

app.get('/about',(req,res)=>{
    // res.send('hi welcome to node app')
    res.render('about')
})

app.get('/addtask',(req,res)=>{
    res.render('addTask')
    // res.render('addTask',{tasklist})
    // res.render('viewTask',{tasklist})
})

let tasklist = []
let id=1

app.post('/addtask',(req,res)=>{ 
    tasklist.push({id:id++,task:req.body.task,status:false})
    // return res.redirect('/addtask')
    res.render('viewTask',{tasklist})
})

app.get('/viewTask',(res,req)=>{
    res.render('viewTask',{tasklist:tasklist})
})

app.post('/deleteTask/:id',(req,res)=>{
    const id = req.params.id
    // console.log(id)
    const index = tasklist.findIndex((item)=>{
        return item.id==id
    })
    tasklist.splice(index,1)
    res.render('viewTask',{tasklist})
})

app.get('/mark/:id',(req,res)=>{
    const id = req.params.id
    const index = tasklist.find((item)=>{
        return item.id==id
    })
    index.status = !index.status
    res.render('viewTask',{tasklist})
})

app.listen(port,()=>{
    console.log('server started at 3000')
})