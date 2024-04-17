const Login = require('../modul/login.modul')

function showlogin(req,res){
    res.render('login')
}

function postlogin(req,res){
    const {email,password } = req.body
    const status = login.Create({email,password})
}

module.exports = {showlogin,postlogin}
