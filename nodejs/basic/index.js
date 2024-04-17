const express = require('express')
const app = express()
const port = 3000
const store = require('./productdb')
const path = require('path')

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))



app.get('/product/:id',(req,res)=>{
    const productid = req.params.id-1
    // res.json(store[req.params.id-1])
    // res.send(req.params.id)
    // res.sendFile(path.join( __dirname,'cart.html'))
    // res.redirect('')
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container ">
        <div class="card" style="width: 18rem;">
            <img src="${store[productid].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${store[productid].title}</h5>
              <p class="card-text">${store[productid].discription}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
    </div>
</body>
</html>
    `)

})


app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})