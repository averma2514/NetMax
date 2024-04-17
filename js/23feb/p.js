//we can change data of element using innerHTML
// browser will change which is given to js it will not effect html file

// document.getElementById('hlo').innerHTML = 'new html'

//innerHTML innerText
//in innerHTML it will take as html if we pass any html tag then it will take it as a tag
//in innerText it will take as text no mater it is tag or text



// function run(){
//     let div = document.getElementById('div')
//     div.innerHTML = '<input id="text" type="text"></input>'

//     // let username = prompt("Enter you name")
//     document.getElementById('login').innerHTML="welcome, "+document.getElementById('text').innerHTML
    
// }

// document.getElementById('login').style.backgroundColor="orange"

let body=document.body
let button = document.getElementById('btn')
let dark =false
function run(){
    if(dark){
        dark=false
        body.style.backgroundColor="white"
        body.style.color="black"

        // button.style.color='white'
    }else{
        dark=true
        body.style.backgroundColor="black"
        body.style.color="white"
        // button.style.backgroundColor='black'
        // button.style.color='white'
    }
}