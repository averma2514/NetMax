const express = require('express')
const routes = express.Router()

const {show,addTask,viewTask,deleteTask,markDone} = require('../controler/task')
const { route } = require('./product')

routes.get('/addtask',show)
routes.post('/addtask',addTask)
routes.get('/viewTask',viewTask)
routes.post('/deleteTask/:id',deleteTask)
routes.get('/mark/:id',markDone)

module.exports = routes