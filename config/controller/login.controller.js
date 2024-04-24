const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')

function showsignin(req,res){
    if(req.cookies.token){
        return res.redirect('/')
    }
    res.render('signup.ejs')
}


async function postsignin(req,res){
    const{username,email,password,phone} = req.body

    const hashed = await bcrypt.hashSync(password,10)
    console.log(hashed)
    const status = await User.create({username,email,password:hashed,phone})
    
    const token = jwt.sign({ username,email,id : status._id }, process.env.JWT_SECRET)

    res.cookie('token', token)
    return res.redirect('/')
}

function getlogin(req,res){
    
}

async function postLogin(req , res){
    const { email , password  } = req.body

    const user = await User.findOne({ email : email }) 

    if(!user){
        return res.json({ msg : "not exsist" , success : false })
    }

   let checkingPassword = await bcrypt.compare(password , user.password )
   if(!checkingPassword){
    return res.json({ msg : "invalid password" , success : false })
   }
   const token = jwt.sign({username:user.username,email:user.email,id:user._id},process.env.JWT_SECRET)
    res.cookie("name" , token)
    // res.json({ msg : "got in" , success : true  })
    
}

function getAccount(req,res){
    res.render('account')
}

function logout(req,res){
    res.cookie("token","")
    return res.redirect('../')
}


module.exports = {showsignin,postsignin,postLogin,getAccount,logout}