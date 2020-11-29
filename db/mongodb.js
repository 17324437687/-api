let mongodb = require('mongoose')

let mongodbSQL = async () => {
    let sql = await mongodb.connect(process.env.NET_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    console.log(`数据库链接成功${sql}`);
}

module.exports = mongodbSQL