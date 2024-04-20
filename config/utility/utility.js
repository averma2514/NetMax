const jwt = require('jsonwebtoken')


function decoded(token){
    const decodeddata = jwt.verify(token, process.env.JWT_SECRET)
    return decodeddata
}

module.exports = decoded