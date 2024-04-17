const productdata = require('../model/db')


function viewProduct(req,res){
    res.send('product view')
}

function addProduct(req,res){
    res.send('add product')
}

function deleteProduct(req,res){
    res.send('delete product')
}

function showsearch(req,res){
    req.render('showsearch',showsearch)
    

    const search = req.params.id
    const filterdata = productdata.filter((items)=>{
        return items.title.includes(' Women ')
    })

    console.log(filterdata)
}

// function searchProduct(req,res){
//     const filterdata = productdata.filter((items)=>{
//         return items.title.includes(' Women ')
//     })

//     console.log(filterdata)
// }

module.exports = {viewProduct,addProduct,deleteProduct,showsearch}