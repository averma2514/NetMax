function show(){
    const box = document.getElementById('box')
    const btn = document.getElementById('btn')

    box.style = 'background-color: black;'
    // height:auto; overflow: none;
}

function showMessage(){
    const message = window.document.getElementById('message')
    message.innerText = 'invalid email or passsword'
}

module.exports = {showMessage}