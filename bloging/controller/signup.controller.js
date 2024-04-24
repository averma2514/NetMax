const User = require('../modul/login.modul')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function getSignup(req,res){
    if(req.cookies.token){
        res.redirect('blog/home')
    }
    res.render('signup.ejs')
}

async function postSignup(req,res){
    const{email,password} = req.body

    const hashed = await bcrypt.hashSync(password,10)
    const status = await User.create({email,password:hashed})
    const token = jwt.sign({id:status.id,email:status.email},process.env.key)
    res.cookie('token', token)

    res.redirect('blog/home')
}

module.exports = {getSignup,postSignup}