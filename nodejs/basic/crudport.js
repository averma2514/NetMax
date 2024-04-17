const express = require('express')
const fs = require('fs')
const { request } = require('http')
const app = express()
const path = require('path')

app.use(express.json())

// let user = [{"username":"aman","email":"aman@gmail.com","pass":"789456123"}]
let user = []
app.get('/home',(request,response)=>{
    // response.send('welcome to home page')
    //response.json
    // response.json({name:'aman',roll:45})
    // const homePage = fs.readFileSync('home.html','utf-8')
    
    response.sendFile(path.join(__dirname,'home.html'))
})

app.post('/home',(request,response)=>{

    // const username = request.body.username
    // const email = request.body.email
    // const pass = request.body.pass

    //we use dismantal insted of giving all element one by ine
    const { username , email,pass} = request.body

    // check user already exist in db using loop
    // for (let i = 0; i < user.length; i++) {
    //     if(user[i].username==username){
    //         response.send('user already exist')
    //         return
    //     }
    // }
    
    if((user.findIndex((item)=>{return item.username == username}))=='-1'){
        //to check 
        // console.log(user.findIndex((username)=>{return user.username == username}))
        user.push({"username":username,"email":email,"pass":pass})
        response.send('user added')
    }else{
        response.send('user already exist')
        return
    }

        // response.send(user[i])
    
    console.log(user)

})

    app.post('/login',(response,request)=>{
        const username = request.body.username
    const email = request.body.email
    const pass = request.body.pass

        const userexist = user.find((item)=>{
            return item.email == email
        })

        if((userexist)&&(userexist.pass==pass)){
            response.send('login sucessful')
        }else{
            response.send('invalid email and pass')
        }

    })


app.get('/about',(request,response)=>{
    const about = fs.readFileSync('aboutus.html','utf-8')
    response.send(about)
})
app.get('/me',(request,response)=>{
    const me = fs.readFileSync('me.html','utf-8')
    response.send(me)
})



app.listen(3000,()=>{
    console.log('started server on 3000')
    // console.log(user.username)
})