const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
    marks:{
        type:String,
        required:true,
        trim:true
    },
    classId: {
        type: Number,
        required: true,
        trim:true
    },
    subjectId: {
        type: Number,
        required: true,
       trim :true
    },
    studentId: {
        type: Number,
        required: true,
        trim:true
    },
   
}, { timestamps: true })

module.exports = mongoose.model('result', resultSchema)