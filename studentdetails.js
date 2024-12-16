const fs = require('fs')

const student = 
`rollNo: 101 Name: jinal  vaghasiya
 rollNo: 102 Name: khushi vaghasiya
 rollNo: 103 Name: selja  sinojiya
 rollNo: 104 Name: happy  radadiya`

fs.writeFile('lab5.txt',student,(err)=>{
    if(err)
   {
         console.log("File not found-wr")
    
    }
}) 