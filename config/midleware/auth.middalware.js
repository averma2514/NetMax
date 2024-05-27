const decoded = require('../utility/utility')

function middleware(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.redirect('../signin/sellerlogin')
    }
    req.user = decoded(token)
    next()
}

function isSeller(req,res,next){
    const role = req.user.role
    if(role=="user"){
        return res.redirect('../')
    }
    next()
}


module.exports = {middleware,isSeller}