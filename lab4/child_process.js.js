const child_process=require('child_process');

child_process.exec("echo 'hello world' ",(err,stdout,stderr) => {
    console.log(stdout);
})