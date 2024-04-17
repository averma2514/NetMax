//tradintional function
// function sum(){
//     return 1+1
// }
// sum()

// var arrowsum = () =>{
//     console.log("arrow function")
//     // return 1+1
// }

// arrowsum()

// hoisting


// console.log(sum)    //in this we get undefined becouse when we declare a varible it will declare at top of caode in backside but not assign value
// var sum=10        //becouse var is hoisting 
// console.log(sum)
// console.log(sum2)   //in this we get Cannot access 'sum2' before initialization 
// const sum2=10       //let and const is not hoisting

// normal function is hoisting 
// add()
// function add(){
//     console.log(1+1)
// }

// arrow function is not hoisting 


let totalsalary =(s,b)=>{
return s+b
}

let finalsalary=(ts)=>{
return ts+8
}

console.log(finalsalary(totalsalary(16,34)))

function abc(a){
    console.log("hi")
}

abc()