const User = require('../model/user.model')
const bcrypt = require('bcrypt')

function showsignin(req,res){
    res.render('signin.ejs')
}


async function postsignin(req,res){
    const{username,email,password,phone} = req.body
    const saltround = bcrypt.genSalt(10)

    const hashed = await bcrypt.hashSync(password,10)
    
    const status = await User.create({username,email,password:hashed,phone})
    res.json(status)
}


module.exports = {showsignin,postsignin}