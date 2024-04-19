const User = require('../model/user.model')
const bcrypt = require('bcrypt')

function showsignin(req,res){
    if(req.cookies.user){
        return res.redirect('/')
    }
    res.render('signup.ejs')
}


async function postsignin(req,res){
    const{username,email,password,phone} = req.body
    const saltround = bcrypt.genSalt(10)

    const hashed = await bcrypt.hashSync(password,10)
    const status = await User.create({username,email,password:hashed,phone})
    
    res.cookie('user' , "aman")
    return res.redirect('/')
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

    // res.setCookies("user" , "nitin")
    res.cookie("name" , "aman")
    res.json({ msg : "got in" , success : true  })
}

module.exports = {showsignin,postsignin,postLogin}