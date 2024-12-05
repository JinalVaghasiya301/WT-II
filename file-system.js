const fs = require('fs')

fs.readFile('context.js',(err,data)=>{
    if(err) {
        console.log("file not found-read")
    }
    else
    {
        console.log("file found-read")

    }
   
})

fs.writeFile('context.txt','hello content!',(err)=>{
    if(err)
    {
        console.log("File not found-wr")

    }
    
    else{
        console.log("file found-wr")
    }
})

fs.exists('context.js',(exists)=> {
  console.log(exists ? 'found-ex' : 'not found-ex')
});

fs.appendFile('context.txt','append text is- this is append text',(err)=>{
    if(err) {;
    console.log("file not found -append")
    }
    else{
        console.log("file found -append")

    }
})




