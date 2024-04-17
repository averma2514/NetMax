const fs = require('node:fs')

// fs.readFile('crud.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.log('oops something went wrong \n',err)
//     }else{
//         console.log(data)
//     }
// })

// console.log(fs.readFileSync('crud.txt','utf-8'))

// fs.writeFile('crud.txt',)

// fs.appendFileSync('ind.txt','hlo')

// fs.appendFile('crud.txt','aman',(err,data)=>{

// })



function addname(name){
    const data = (fs.readFileSync('crud.txt','utf-8'))
    
    if(data.includes(name)){
        console.log('name already exist in database')
        return
    }else{
        fs.appendFileSync('crud.txt',`\n${name}`)
        console.log('name added sucessfully')
    }
}



function delname(name){
    const data = (fs.readFileSync('crud.txt','utf-8'))

    if(data.includes(name)){
        fs.unlinkSync('crud.txt',name)
        console.log('deleted')
        return
    }else{
        console.log('name not found')
    }
}

addname('ka')
// delname('aman')