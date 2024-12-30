const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("Home Page");
    }
    else if(req.url=='/about'){
        res.end("about Page");
    }
    else if(req.url=='/contact'){
        
        res.end("contact Page");
    }
    else if(req.url=='/profile'){
        res.end("profile Page");
    }
    else if(req.url=='/blog'){
        res.end("blog Page");
    }

})

server.listen(3001,()=>{
    console.log("Hello world");
});
