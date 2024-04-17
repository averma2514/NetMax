const http  =require('http')
const url = require('url')

http.createServer((request,response)=>{

    // console.log(url.parse(request.url))

    const path = url.parse(request.url)

    if(path.pathname=='/'){
        response.write('hello guys')

    }else if(path.pathname=='/about'){
        response.write('about page')
    }else{
        response.write('page not found')
    }



    response.end()
}).listen(3000,()=>{
    console.log('server started at post 3000')
})

