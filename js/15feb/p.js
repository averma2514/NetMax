//forof ,forin loop,backtick,
//Math => floor,ceil,round,random
//Date

let arr = ["aman", "anmol","amit"]

for(let i in arr){  //in this index element ispass to i
    console.log(arr[i])
}

for(let i of arr){  //in this element is pass to i
    console.log(i)
}
num=2
let num2 = `${num}x 1 =${num*1}`    //we can also use backtick to ptint string this will take all as a single string
                                    // in string concatinate we combine multiple strings and then print
console.log(num2)

console.log(Math.floor(1.2))
console.log(Math.ceil(1.2))
console.log(Math.round(Math.random()*10))
console.log(Math.round(Math.random()*10))
console.log(Math.round(Math.random()*10))

console.log("Date functoin")
let date = new Date()
console.log(date.getDay())
// console.log(date.getTime())
console.log(date.toLocaleString())  //to get local time

let arr1 = [1,2,4,5]
let arr2 = [6,7,8,9]
let arr2size =arr2.length

for(let i=0;i<arr2size;i++){
    arr1.push(arr2[i])
}
console.log(arr1)
