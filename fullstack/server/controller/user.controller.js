
const TODO = require('../schema')

async function getTodoList(req,res){
    const todoList = await TODO.find()
    res.dend(todoList)
}

module.exports = {getTodoList}