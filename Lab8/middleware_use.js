const express = require('express');
const app = express();
require('dotenv').config();

const faculties=[];

//using use method
app.use("/student",(req, res, next)=> {
    console.log("MiddleWare called");
    next();
});

//getAll
app.get('/student', function(req, res) {
    res.send("Get Method called");
});

//getById
app.get('/student/:id', function(req, res) {
    const id = req.params.id;
    const index = faculties.findIndex(temp=> temp.id == parseInt(id));
    if(index == -1){
        res.status(404).send("Faculty not found");
    }else{
        res.send(faculties[index]);
    }
});

//organized way 
app.get('/faculties', function(req, res) {
    const ans = {
        isSuccess : true,
        count : faculties.length,
        data : faculties
    }
    res.send(ans);
});
app.listen(process.env.PORT,()=>{
    console.log("Server started on port",process.env.PORT);
})