let teacher = require('../models/teacher')

exports.getTeacher = async (req, res, next) => {
    try {

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

exports.addTeacher = async (req, res, next) => {
    try {
        let list = await teacher.create(req.body)
        res.status(200).json({
            success: true,
            data: list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}