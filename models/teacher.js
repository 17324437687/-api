// 讲师管理

let mongoose = require("mongoose")

let teacherSchema = mongoose.Schema({

    ImageUrl: String,
    name: String, //讲师名称
    title: String, //头衔
    textarea: String, // 讲师资历
    brief: String, //简介
    date: { //入驻时间
        type: Date,
        default: Date.now,
    },
    num: Number, //排序 
})

module.exports = mongoose.model("teacher", teacherSchema)