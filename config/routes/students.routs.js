const express  = require('express')
const router = express.Router()
const {getStudentData,postStudentData,updatestudent,deletestudent} =require('../controller/students.controller')

router.get('/',getStudentData)
router.post('/',postStudentData)
router.put('/update/:id',updatestudent)
router.delete('/delete/:id',deletestudent)

module.exports = router
