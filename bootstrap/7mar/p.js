const email = document.getElementById("exampleInputEmail1")
const pass = document.getElementById("exampleInputPassword1")



function check(e){
    e.preventDefault()
    // if(!email.value.includes('@')){
    //     document.getElementById('emailHelp').innerText="invalid email"
    //     email.className= `form-control border border-danger`
    //     // return
    // }

    console.log(pass.value)

    if(!pass.value.length()>=5 && pass.value.length()<=12){
        console.log("error")
        document.getElementById('passHelp').innerHTML="invalid pass"
        return
    }
}


