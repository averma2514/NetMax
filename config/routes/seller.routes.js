const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { addProduct, getAddProduct } = require('../controller/seller.controller')



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,path.join(__dirname,'../public/image/upload'))
    },
    filename :function(req,file,cb){
        const format = Date.now()+'-'+file.originalname
        cb(null,format)
    }
})

const upload = multer({storage:storage})


router.get('/',(req,res)=>{
    res.send('seller landing page')
})

router.get('/addproduct',getAddProduct)
router.post('/addproduct',upload.single('thumbnail'),addProduct)
// routes.post('/',addProduct)

module.exports = router