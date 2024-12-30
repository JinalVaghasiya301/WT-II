const express = require('express');
const app = express();

//using all method
app.all("/student/:id",(req, res, next)=> {
    console.log("MiddleWare called");
    next();
});

app.get('/student/project', function(req, res) {
    res.send("Get Method called");
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})