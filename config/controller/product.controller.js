const product =require('../model/product.modul')

//get function
async function getproduct(req,res){
    const productdata  = await product.find()
    res.json({productdata})
}

//post function
async function postproduct(req,res){
    const {name,price,category} = req.body
    const productdata  = await product.create({name,price,category})
    res.json({productdata})
}

async function updateproduct(req,res){
    const {id} = req.params
    const { name,price,category} = req.body

    const status = await product.updateOne({_id:id},{name,price,category})
    res.json(status)
    
}

module.exports = {getproduct,postproduct,updateproduct}