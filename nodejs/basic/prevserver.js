const http = require('http')
const url = require('url')

http.createServer((request,response)=>{
    const path = url.parse(request.url)

    if(path.pathname=='/' || path.pathname=='/home'){
        response.write('home page')
    }else if(path.pathname=='/about'){
        response.write('about page')
    }else if(path.pathname=='/cart'){
        response.write('cart page')
    }else{
        response.write('page not found \nerror code 404')
    }
    response.end()
}).listen(3100,()=>{console.log('server start')})