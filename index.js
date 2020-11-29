let express = require("express")
let dotenv = require('dotenv')
let mongodbSQL = require("./db/mongodb")
let app = express()
dotenv.config({
    path: "./db/confing.env"
})
// 跨域支持 cors
let allowCrossDmain = (req, res, next) => {
    // 设置请求源
    res.header("Access-Control-Allow-Origin", "*")
    //设置请求头
    res.header("Access-Control-Allow-Headers", "*")
    // 设置请求方法
    res.header("Access-Control-Allow-Methods", "*")
}
app.use(allowCrossDmain)
app.use(express.json()) //body解析

// 阿里云存储对象 文件上传接口
let multer = require("multer")
let MAO = require("multer-aliyun-oss")
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
app.post('/api/upload', upload.single('file'), async (req, res) => {
    let file = req.file
    console.log(file);
})



mongodbSQL() // 链接数据库
let port = process.env.PORT || 3000
app.listen(port, console.log(`启动服务器${port}`))