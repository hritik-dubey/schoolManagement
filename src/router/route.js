const express = require('express');
const router = express.Router();
const schoolManagement  =  require("../controller/schoolManagement")



router.post("/createStudent",schoolManagement.createStudent)
router.post("/createClass",schoolManagement.createClass)
router.post("/createExam",schoolManagement.createExam)
router.post("/createSubject",schoolManagement.createSubject)
router.post("/createResult",schoolManagement.createResult)

module.exports = router