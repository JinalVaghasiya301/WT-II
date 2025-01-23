const mongoose = require('mongoose');

const schema = mongoose.Schema({
    StudentName: String,
    StudentRoll: Number,
    StudentMobile: Number,
    
});

module.exports = mongoose.model("Students",schema);

