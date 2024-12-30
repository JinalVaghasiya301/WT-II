const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.statusMessage = 'Hello world';
    res.end('OK');
})

server.listen(3000,()=>{
    console.log("Hello world");
});
