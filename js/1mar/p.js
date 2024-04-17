const pass = document.getElementById('pass')
const lenght = document.getElementById('lenght')
pass.addEventListener("input",change)   //input return when we change or input in input box

function change(){
    // console.log(pass.value) //.value is for to fetch input value
    if(pass.value.length>=5 && pass.value.length<=12){
        pass.className='green'
    }else{
        pass.className='red'
    }
    lenght.innerText=  `you entered ${pass.value.length} character` 
}
