const fs=require('fs');

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readFile('home.txt',(err,data)=>{

            res.end(data.toString());
        })
    }
    if(req.url=='/about'){
        fs.readFile('about.txt',(err,data)=>{

            res.end(data.toString());
        })
    }
})

server.listen(3002,()=>{
    console.log("Hello world");
});
