const mongoose = require("mongoose")

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required: true,
        trim: true
    },
    classId: {
        unique:true,
        type: Number,
        required: true,
        trim:true
    },
    subjectId: [{
        type: Number,
        required: true,
        trim:true
    }],
}, { timestamps: true })

module.exports = mongoose.model('class', classSchema)