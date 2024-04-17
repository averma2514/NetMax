let arr = [{name:"nitin",isactive:"false",ballance:400},{name:"aman",isactive:"true",ballance:550},{name:"rahul",isactive:"false",ballance:800}]

// let newarr = arr.map((item)=>{
//         return {name:item.name,isactive:"true"}
// })

let newarr = arr.filter((item)=>{
    return item.ballance <500
})

console.log(newarr)
