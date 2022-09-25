const studentModel = require("../model/studentModel")
const classModel = require("../model/classModel")
const examModel = require("../model/examModel")
const resultModel = require("../model/resultModel")
const subjectModel = require("../model/subjectModel")

const mongoose = require("mongoose")

const createStudent = async (req, res) => {
    try {
        let data = req.body
        let { classid, studentid } = data
        let getclassid = await classModel.findOne({ classId: classid })
        if (!getclassid) return res.status(400).send({ status: false, message: "classId is not present" })
        let getsubjectid = await studentModel.findOne({ studentId: studentid })
        if (!getsubjectid) return res.status(400).send({ status: false, message: "subjectId is not present" })
        let studentclassId = getsubjectid.classId
        if (getclassid == studentclassId) return res.status(400).send({ status: false, message: "please send the unique" })
        let studentobj = await studentModel.create(data)
        return res.status(201).send({ status: true, data: studentobj })
    } catch (err) {
        res.status(500).send({ msg: err })
    }
}
const createClass = async (req, res) => {
    try {
        let data = req.body
        let studentobj = await classModel.create(data)
        return res.status(201).send({ status: true, data: studentobj })
    } catch (err) {
        res.status(500).send({ msg: err })
    }
}
const createExam = async (req, res) => {
    try {
        let data = req.body
        let studentobj = await examModel.create(data)
        return res.status(201).send({ status: true, data: studentobj })
    } catch (err) {
        res.status(500).send({ msg: err })
    }
}
const createResult = async (req, res) => {
    try {
        let data = req.body
        let studentobj = await resultModel.create(data)
        return res.status(201).send({ status: true, data: studentobj })
    } catch (err) {
        res.status(500).send({ msg: err })
    }
}
const createSubject = async (req, res) => {
    try {
        let data = req.body
        let studentobj = await subjectModel.create(data)
        return res.status(201).send({ status: true, data: studentobj })
    } catch (err) {
        res.status(500).send({ msg: err })
    }
}
module.exports = { createStudent, createClass, createExam, createResult, createSubject }