const email = document.getElementById("email")
const pass = document.getElementById("pass")
const btn = document.getElementById("btn")

btn.addEventListener("click",handleClick)

function handleClick(e){
    e.preventDefault()

    if(!email.value.includes('@')){
        document.getElementById('h').innerHTML="invalid email"
        return
    }

    if(!pass.value.length>=5 && pass.value.length<=12){
        document.getElementById('h').innerHTML="invalid pass"
        return
    }
}
    document.getElementById('h').innerHTML="Submit sucessfull"


