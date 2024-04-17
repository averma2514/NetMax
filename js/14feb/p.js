//arrays
//in arrays we can store diffrents types of data 

let array = ['aman',1,'c']
console.log(array)

for(let i=0;i<array.length;i++){
    console.log(array[i])
}

//array.push("element") => push is use for add data from end
//pop() => is use for delete element from end
//shift() => is use to delete element from start
//unshift("element") => is use for add element in start


console.log(array.push("hi"))
console.log(array.pop())
console.log(array.shift())
console.log(array.unshift("hlo"))


console.log(array)

let name="aman"

//startsWith is use to check element is start with given value or not
//endWith
//includes
console.log(name.startsWith("a"))

console.log(name.split("a"))    // split is use for split element it take braking point

//slice is use ti divide element
console.log(name.slice(0,2))




// let pal = "naman"
// let rev = reverse(pal)

// pal.reverse()
// console.log(pal)
// let rev =[]
// for(let i=pal.length-1;0<=i;i--){
//     rev.push(pal.charAt(i))
// }


// rev=rev.join("")
// console.log(rev==pal)

let pal = "naman"
let bool = true
let size = pal.length
for(let i=0;i<size/2;i++){
    if(pal[i]!=pal[size-i-1]){
        bool = false
        break
    }   
}

console.log(bool)