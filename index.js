let http=require('http')
let fs=require('fs')
http.createServer((resquest,response)=>{
    response.setHeader('content-type','text/html;charset=utf-8');
    let temStr = fs.readFileSync('./tem/tem.html','utf-8');
    response.end(temStr)
}).listen(80,'127.0.0.1',()=>{
    console.log('hehe')
})