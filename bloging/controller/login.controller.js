const fun = require('../public/js/function')
const User = require('../modul/login.modul')
const bcrypt = require('bcrypt')
const jsw = require('jsonwebtoken')

function showlogin(req,res){
    res.render('login')
}

async function postlogin(req,res){
    const {email,password } = req.body
    const user = await User.findOne({email})
    if(!user){   
        // const message = document.getElementById('message')
        // message.innerText = 'invalid email or passsword'
        console.log('wrong email or password')
        return
    }
    const validuser = await bcrypt.compare(password,user.password)
    if(validuser){
        const token = jsw.sign({id:user.id,email:user.email},process.env.key)
        res.cookie('token', token)
        res.send('welcome')
    }
}

module.exports = {showlogin,postlogin}
