const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema({
    name: {
        unique:true,
        type: String,
        required: true,
        trim: true
    },
    subjectId :{
        unique:true,
        type:Number,
        required:true,
        trim:true
    }
}, { timestamps: true })

module.exports = mongoose.model('subject', subjectSchema)