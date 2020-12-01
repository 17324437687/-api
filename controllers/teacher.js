let teacher = require('../models/teacher')

exports.getTeacher = async (req, res, next) => {
    try {
        let list = await teacher.find(req.query)
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


exports.updataTeacher = async (req, res, netx) => {
    try {
        let list = await teacher.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!list) {
            return res.status(400).json({
                success: false
            });
        }
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

exports.deleteTeacher = async (req, res, next) => {
    try {
        let list = await teacher.findByIdAndDelete(req.params.id)
        if (!list) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: "删除成功"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}