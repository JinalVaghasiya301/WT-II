const express = require('express');

const app = express();

const data = ["darsahn","rajkot"];

// getAll api
app.get('/data',(req,res)=>{
    res.send(data);
});
//getById api
app.get('/data/:id',(req,res)=>{
    res.send(data[req.params.id]);
});
//insert (create) api
app.post("/data/add/:temp",(req,res)=>{
    data.push(req.params.temp);
    res.send(data);
});
//delete api
app.delete("/data/:id",(req,res)=>{
    data.splice(req.params.id,1);
    res.send(data);
});
//edit (update) api
app.patch("/data/edit/:id/:newdata",(req,res)=>{
    data[req.params.id] = req.params.newdata;
    res.send(data);
});


app.listen(3000,()=>{
    console.log("Server started @ 3000");
});