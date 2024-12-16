
//WAP in NodeJS to count number of words in a le (B)

const fs = require('fs');
const wordCount = require('word-count');


fs.readFile('copy.txt','utf-8',(err,data)=>{
    if(err)
   {
         console.log("File not found-read");
         return;
         
    
    }
    
    var str=data.toString();
    var words = wordCount(str);
    console.log('Word Count: ',words);
}) 