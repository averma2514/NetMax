const {decoded} = require('../utility/utils')

function middleware(req,res,next){
    const userdata = decoded(cookie.token)
    console.log(userdata)
}