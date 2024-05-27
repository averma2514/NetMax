const Product =require('../model/product.modle')
// const Seller = require('../model/seller.model')



// function getAdminLogin(req,res){
//     res.render()
// }


// async function addSeller(req,res){
//     const {name,phone,email,city} = req.body
//     console.log(name,phone,email,city)
//     const status = await Seller.create({name,phone,email,city})
//     res.json(status)
// }


//function to show a form to seller for adding selleing product
function getAddProduct(req,res){
    if(!req.cookies.token){
        return res.redirect('../sigin/sellerlogin')
    }
    res.render('addProduct')
}

//post function to add product for selling
async function addProduct(req,res){
    const {name,price,category,description} = req.body
    // console.log(req.file.filename)
    const status = await Product.create({name,price,category,description,image:req.file.filename, seller: req.user._id})
    res.json(status)
}


async function updateProduct(req,res){
    const {id} = req.params
    const { name,price,category} = req.body
    const status = await product.updateOne({_id:id},{name,price,category})
    res.json(status)
}

module.exports = {
    getAddProduct,
    addProduct,
    updateProduct,
}