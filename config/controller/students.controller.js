
const Student = require('../model/students.model')

//desplay data
//get function
async function getStudentData(req,res){
    const studentData = await Student.find()
    res.json({studentData : studentData})
    
}

//insert data in db
//post function
async function postStudentData(req,res){
    const {name, roll,course,phone} = req.body
    const studentData = await Student.create({name:name,rollno:roll,course:course,mobile:phone})
    res.json({student :studentData})
}

async function updatestudent(req,res){
    const {id} = req.params
    const {name,rollno,course,mobile} = req.body
    const status = await Student.updateOne({_id:id},{name,rollno,course,mobile})
    res.json({status})
}

async function deletestudent(req,res){
    const {id} = req.params
    const status = await Student.deleteOne({_id:id})
    res.json(status)
}

module.exports = {getStudentData,postStudentData,updatestudent,deletestudent}