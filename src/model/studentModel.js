const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    studentId: {
        type: Number,
        required: true,
        trim: true
    },
    classId: {
        type: Number,
        required: true,
        trim: true
    },

}, { timestamps: true })

module.exports = mongoose.model('student', studentSchema)