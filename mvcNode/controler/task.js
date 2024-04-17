let tasklist = []
let id=1
// app.set('view engine',"ejs")

function show(req,res){
    res.render('addTask')
}

function addTask(req,res){
    tasklist.push({id:id++,task:req.body.task,status:false})
    res.render('viewTask',{tasklist})
}

function viewTask(res,req){
    res.render('viewTask',{tasklist:tasklist})
}

function deleteTask(req,res){
    const id = req.params.id
    const index = tasklist.findIndex((item)=>{
        return item.id==id
    })
    tasklist.splice(index,1)
    res.render('viewTask',{tasklist})
}

function markDone(req,res){
    const id = req.params.id
    const index = tasklist.find((item)=>{
        return item.id==id
    })
    index.status = !index.status
    res.render('viewTask',{tasklist})
}

module.exports = {show,addTask,viewTask,deleteTask,markDone}