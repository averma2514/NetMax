

//get function
async function getproduct(req,res){
    // if(!req.cookies.token){
    //     return res.redirect('signup.ejs')
        
    // }
    const productdata  = await Product.find().populate("seller")
    res.json({productdata})
    // res.send(req.user.username)
    
}


module.exports = {getproduct}