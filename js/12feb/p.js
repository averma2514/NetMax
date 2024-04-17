//function in js


//declaration of function
function myfun(){
//bpdy of function

//statement
console.log("hlo, this is function")
}



myfun() //calling of function

myfun()     //dry => don't repeat your code
myfun()     //when we use same function more than onece that called dry
myfun()


function addtwo(num1,num2){     //value which is given at time of creating of function is known as parameter 
    return num1+num2
}

console.log(addtwo(4,8))    // value which is given at thime of function calling is known as argument
console.log(addtwo(14,8))




function totalSalary(salary, bonus){
    return salary+bonus
}

function printTotalSalary(totalincome){
    // console.log("Total salary is =>"+totalincome)
    
    console.log(totalSalary(salary, bonus))
}

// let salary = Number(prompt("enter salary "))
// let bonus = Number(prompt("enter bonus"))

let salary  = 1000
let bonus = 5000

let option = Number(prompt("Enter 1 to add salary and bonus, Enter 2 to print total income "))

let totalincome
if(option ==1){
    totalincome = totalSalary(salary, bonus)
}else if(option ==2){
    printTotalSalary(salary, bonus)
}


// let totalincome = totalSalary(salary, bonus)
// printTotalSalary(totalincome)