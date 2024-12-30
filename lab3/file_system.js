const fs = require('fs')

// fs.readFile('context.js',(err,data)=>{
//     if(err) {
//         console.log("file not found-read")
//     }
//     else
//     {
//         console.log("file found-read")

//     }
   
// })

// fs.writeFile('context.txt','hello content!',(err)=>{
//     if(err)
//     {
//         console.log("File not found-wr")

//     }
    
//     else{
//         console.log("file found-wr")
//     }
// })

// fs.exists('context.js',(exists)=> {
//   console.log(exists ? 'found-ex' : 'not found-ex')
// });

// fs.appendFile('context.txt','append text is- this is append text',(err)=>{
//     if(err) {;
//     console.log("file not found -append")
//     }
//     else{
//         console.log("file found -append")

//     }
// })

const data=fs.readFileSync('context.txt','utf-8')
console.log(data);
console.log("Hello world");


fs.writeFileSync('context.txt','hello !','utf-8');
console.log("Helooo!");



