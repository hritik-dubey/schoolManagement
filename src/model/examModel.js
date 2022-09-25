const mongoose = require("mongoose")

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    classId: {
        type: Number,
        required: true,
        trim:true
    },
    studentId: {
        type: Number,
        required: true,
        trim:true
    },
}, { timestamps: true })

module.exports = mongoose.model('exam', examSchema)