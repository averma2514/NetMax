let age = 150

//console.log(age>=18 && age<50)

// if(age>=18){
//     console.log("you are eligible")
// }

//if else
// if(age<1){
//     console.log("invalid age")
// }else if(age<12){
//     console.log("kid")
// }else if(age<18){
//     console.log("teen")
// }else if(age<50){
//     console.log("adult")
// }else if(age<=110){
//     console.log("senier")
// }else{
//     console.log("bhatakti atma")
// }

let a=8,b=4
let operation = '*'

console.log(a+operation+b+"=")

switch(operation){
    case '+':
        console.log(a+b)
        break
    
    case '-':
        console.log(a-b)
        break
        
    case '/':
        console.log(a/b)
        break
    
    case '*':
        console.log(a*b)
        break
     
    default:
        console.log("invalid opration")
        break
}