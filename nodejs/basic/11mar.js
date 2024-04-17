// async function fd(){
//     const data = await fetch('https://fakestoreapi.com/products')
//     const printdata =await data.json()
//     console.log(printdata[1])            
// }

function pr(){
    console.log(Math.ceil(Math.random()*10000))
}

function pri(){
    console.log('hlo')
}

//for multiple function use object list 
// module.exports= {pr,pri}
const order =[]
function takeorder(name){
    const id =Math.ceil(Math.random()*10)
    const obj={name:name, id:id}
    order.push(obj)
}

function prepairedorder(){
    const prepaire = order.shift()
    setTimeout(()=>{
        console.log('order id: '+prepaire.id+' ready')
    },3000)
}

module.exports= {pr,pri,takeorder,prepairedorder}