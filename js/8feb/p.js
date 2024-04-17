//find greater of 3 number
let a=20,b=2,c=20
if(a>b){
    if(a>c){
        console.log("a is greater")
    }else{
        if(a==c){
            console.log("a and c is greater")
        }
        else{console.log("c is greater")}
    }
}else{
    if(b>c){
        if(a==b){
            console.log("a and b is greater")
        }else{
            console.log("b is greater")

        }
    }else{
        if(a==c){
            if(a==b){
                console.log("all equal")
            }else{
            console.log("a and c is greater")}
        }else{
            if(b==c){
        console.log("b and c is greater")
    }else{
        console.log("c is greater")
    }
    }
    }
}

//forloop
for(let i=1;i<=10;i++){
    console.log("hi ")
} 

for(let i=1;i<=10;i++){
    console.log(i )
}

// table of 2
for(let i=1;i<=10;i++){
    console.log("2 * "+i+" = "+i*2)
}

//factorial
let result =1;
for(let i=5;i>1;i--){
    result*=i
}
console.log(result)

//prime number 
let totalprime=0
for(let i=2;i<100;i++){
    let temp =i/2+1;
    let result=0
    for(let j=2;j<temp;j++){
        
        if(i%j==0) //to check it prime or not
        {   
            result++
            break //
        }
    }
    if(result==0) //if it zero then it prime number
    {
        console.log(i)
        totalprime++
    }
}

console.log(totalprime)