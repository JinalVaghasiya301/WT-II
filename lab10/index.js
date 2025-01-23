const schema = ('./student_schema');
const express= require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const student_schema = require('./student_schema');


const alturl = "mongodb+srv://24010100704:jinal123@cluster0.6fihy.mongodb.net/"

mongoose.connect(alturl).then(
    () => {console.log('connected to DB server');

    const app = express();
    app.use(bodyparser.json());




});