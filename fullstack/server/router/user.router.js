const express =require('express')
const { getTodoList } = require('../controller/user.controller')

const Router = express.Router()

Router.get('/gettodolist',getTodoList)

module.exports = {Router}
