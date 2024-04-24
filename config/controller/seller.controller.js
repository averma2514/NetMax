const Product =require('../model/product.modle')
const Seller = require('../model/seller.model')



function getAdminLogin(req,res){
    res.render()
}


async function addSeller(req,res){
    const {name,phone,email,city} = req.body
    console.log(name,phone,email,city)
    const status = await Seller.create({name,phone,email,city})
    res.json(status)

}

async function addProduct(req,res){
    const {name,price,category,seller} = req.body
    const status = await Product.create({name,price,category,seller})
    res.json(status)
}


async function updateproduct(req,res){
    const {id} = req.params
    const { name,price,category} = req.body

    const status = await product.updateOne({_id:id},{name,price,category})
    res.json(status)
    
}

module.exports = {getAdminLogin,addSeller,addProduct}