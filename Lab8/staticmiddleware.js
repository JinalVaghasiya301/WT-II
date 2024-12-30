const express = require('express');

const app = express();

app.use(express.static("./"))

app .get("/" ,(req,res)=>{
    res.send("Hello")
})

app.listen(3000, ()=> {
    console.log("Server started");
})