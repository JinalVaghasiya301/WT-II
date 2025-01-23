
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const student_schema = require('./student_schema');


const alturl = "mongodb+srv://24010100704:jinal123@cluster0.6fihy.mongodb.net/Students"

mongoose.connect(alturl).then(
    () => {console.log('connected to DB server');

    const app = express();
    app.use(bodyparser.json());

    //get all
    app.get("/student",async (req,res)=>{
        const data = await student_schema.find();
        res.send(data);
    });

    //insert document
    app.post("/student", async (req,res)=>{
        const obj = new student_schema({
            StudentName:req.body.StudentName,
            StudentRoll:req.body.StudentRoll,
            StudentMobile: req.body.StudentMobile,
        });
        const data = await obj.save();
        res.send(data);

    });

    //update Document
    app.patch("/student/:id", async (req,res)=>{
        let stu = await student_schema.findOne({_id:req.params.id});
        stu.StudentName = req.body.StudentName;
        stu.StudentRoll = req.body.StudentRoll;
        stu.StudentMobile = req.body.StudentMobile;
        const data = await stu.save();
        res.send(data);
    });


    //delete document
    app.delete("/student/:id", async (req,res)=>{
        const data = await student_schema.deleteOne({_id:req.params.id});
        res.send(data)
    });



    app.listen(3000,() => {
        console.log('server is running mode at 3000 port');
    })

});