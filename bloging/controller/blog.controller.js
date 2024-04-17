const Blog = require('../modul/blog.modul')

async function showhomepage(req,res){
    const data = await Blog.find()
    res.render('../view/blog.view.ejs',{data})
    // res.json({data})
}

function addblog(req,res){
    res.render('../view/addblog.ejs')
}

async function addblogdata(req,res){
    const {name,title,contant} = req.body
    const status = await Blog.create({name,title,contant})
    // res.json(req.body)
    // console.log(status)
    // alert('blog added sucessfully')
    res.redirect('./home')
}

async function readmore(req,res){
    const id = req.params
    const {name,title,contant} = Blog.findOne({_id:id})
    console.log(name,title,contant)
}

module.exports = {showhomepage,addblog,addblogdata,readmore}