const User = require('../modul/login.modul')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function getSignup(req,res){
    
    res.render('signup.ejs')
}

async function postSignup(req,res){
    const{email,password} = req.body

    const hashed = await bcrypt.hashSync(password,10)
    const status = await User.create({email,password:hashed})
    const token = jsw.sign({id:user.id,email:user.email},process.env.key)
    res.cookie('token', token)

    res.redirect('blog/home')
}

module.exports = {getSignup,postSignup}