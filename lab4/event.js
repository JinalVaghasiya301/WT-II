
const EventEmitter = require("events");

class  MyEmitter extends EventEmitter{}

const ticker = new MyEmitter();

ticker.on("UploadVideo",()=>{
    console.log("Okay..!")
})

setInterval(() => {
    ticker.emit("UploadVideo");
})