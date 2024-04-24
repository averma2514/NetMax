const jwt = require('jsonwebtoken')

function decoded(token){
    const decodeddata = jwt.verify(token,process.env.key)
    return decodeddata
    
}

module.exports = { decoded}