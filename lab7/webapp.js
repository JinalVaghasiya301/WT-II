const express= require('express');

const app = express();

app.get('/',(req,res) => {
    res.send("This is Home Page.");
});

app.get('/about',(req,res) => {
    res.send("This is About Page.");
});

app.get('/contact',(req,res) => {
    res.send("This is Contact Page.");
});

app.get('/Profile',(req,res) => {
    res.send("This is Profile Page.");
});

app.get('/blog',(req,res) => {
    res.send("This is Blog Page.");
});

app.listen(8000,() => {
    console.log("Server Started at 8000 port.")
});

