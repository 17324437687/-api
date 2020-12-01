let express = require("express")
let dotenv = require('dotenv')

let mongodbSQL = require("./db/mongodb")
let teacher = require('./routers/teacher')


let app = express()
dotenv.config({
    path: "./db/confing.env"
})
app.use(express.json()) //body解析
// 跨域支持 cors
let allowCrossDmain = function (req, res, next) {
    // 设置请求源
    res.header("Access-Control-Allow-Origin", "*")
    //设置请求头
    res.header("Access-Control-Allow-Headers", "*")
    // 设置请求方法
    res.header("Access-Control-Allow-Methods", "*")
    next()
}
app.use(allowCrossDmain)

// 阿里云存储对象 文件上传接口
let MAO = require("multer-aliyun-oss")
let multer = require("multer")
let upload = multer({
    storage: MAO({
        config: {
            region: "oss-cn-shenzhen",
            accessKeyId: "LTAI4FzEnyUXpGJTR4QUxmZz",
            accessKeySecret: "A9tb338trfSUQrBSHKKqwyNvRMy3PZ",
            bucket: "node-api-app"
        }
    })
})
app.post('/api/upload', upload.single('file'), (req, res) => {
    // console.log(req.file.url);
    try {
        let file = req.file.url
        res.status(200).json({
            success: true,
            data: file
        })
    } catch (error) {
        let file = file.url
        res.status(400).json({
            success: false,
            error: error
        })
    }

})

// 路由挂载

app.use('/api/teacher', teacher)


mongodbSQL() // 链接数据库

let port = process.env.PORT || 3000
app.listen(port, console.log(`启动服务器${port}`))