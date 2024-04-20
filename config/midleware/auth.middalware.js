const decoded = require('../utility/utility')

function middleware(req,res,next){
    const token = req.cookies.token

    if(!token){
        res.redirect('/signin/signin')
    }

    req.user = decoded(token)
    next()
}

module.exports = middleware