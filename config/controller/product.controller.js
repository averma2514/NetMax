const Product = require('../model/product.modle')


//get functionp
async function getProduct(req,res){
    if(!req.cookies.token){
        return res.redirect('login.ejs')
    }

    const productdata  = await Product.find().populate("seller")
    // res.json({productdata})
    res.render('product',{productdata})
}



module.exports = {getProduct}