const database = require('../model/db')

function  getuser(req,res){
    
}

function post(req,res){
    const {username,email,id} = req.body
    const userdata = {
        username,
        email,
        id:Date.now()
    }
    database.push(userdata)

}

module.exports = {getuser,post}