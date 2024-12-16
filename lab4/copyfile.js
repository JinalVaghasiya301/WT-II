const fs = require('fs')


fs.copyFile('lab5.txt','context.txt',(err)=>{
    if(err)
   {
         console.log("File not found-wr")
    
    }
}) 