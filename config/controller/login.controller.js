const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')


//------------------------------------sellers----------------------------------------

//get method to desplay form for seller login
function getLoginSeller(req,res){
    if(req.token){
        return redirect('../')
    }
    res.render('login',{error:""})
}

//post method to check user is valid or not , if valid make a token and store id,name,email in token
async function postLoginSeller(req,res){
    const {email,password} = req.body
    const isUser =await User.findOne({email:email,role:"seller"})
    // console.log(isUser)
    if(!isUser){
        return res.render('login' , { error : "User not found" } )
    }

    const validpass= await bcrypt.compare(password,isUser.password)
    if(validpass)  {
        const token = jwt.sign({
            name : isUser.name ,
            email : isUser.email ,
            _id : isUser._id ,
            role : isUser.role
        } , process.env.JWT_SECRET)
        res.cookie('token' , token )
        res.redirect('../seller/')
    }else{
        res.render('login' , { error : "Invalid Password" } )

    }
}

//get method to display a form for seller to register
function getSellerSignup(req,res){
    if(req.token){
        return redirect('../')
    }
    res.render('signup')
}

//post method to create sellers account
async function postSellerSignup(req,res){
    const {name,email,phone,password} = req.body
    const hashed =await bcrypt.hashSync(password,10)
    const status = await User.create({name,email,phone,role:"seller",password:hashed})

    const token = jwt.sign({name:status.name,email:status.email,phone:status.phone,id:status.id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.redirect('../')
}




//------------------------------------buyers----------------------------------------
//get method to display a form to signup form a buyer
function getSignup(req,res){
    if(req.cookies.token){
        return res.redirect('/')
    }
    res.render('signup.ejs')
}

//post method for creating account of buyers
async function postSignup(req,res){
    const{name,email,password,phone} = req.body
    const hashed = await bcrypt.hashSync(password,10)
    const status = await User.create({name,email,password:hashed,phone})
    const token = jwt.sign({name:status.name,email:status.email,id:status.id}, process.env.JWT_SECRET)
    res.cookie('token',token)
    //make a home page for buyers
    return res.redirect('../')
}

//get method to display login form for buyer
function getLogin(req,res){
    if(req.token){
        return redirect('../')
    }
    res.render('login',{error:""})
}

//post method to check user is valid or not
async function postLogin(req , res){
    const { email , password  } = req.body
    const user = await User.findOne({ email,role:"user"}) 
    if(!user){
        return res.render('login' , { error : "User not found" } )
    }
   let checkingPassword = await bcrypt.compare(password , user.password )
   if(!checkingPassword){
    return res.redirect('login',{error:"user not found"})
   }
   const token = jwt.sign({name:user.name,email:user.email,id:user.id,role:user.role},process.env.JWT_SECRET)
    res.cookie("token" , token)
    res.redirect('../')
    // res.json({ msg : "got in" , success : true  })
}

function getAccount(req,res){
    res.render('account')
}

function logout(req,res){
    res.cookie("token","")
    return res.redirect('../')
}


module.exports = {
    //seller 
    getLoginSeller,
    postLoginSeller,
    getSellerSignup,
    postSellerSignup,

    //buyer
    getSignup,
    postSignup,
    getLogin,
    postLogin,


    getAccount,
    logout,
}