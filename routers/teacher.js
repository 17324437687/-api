let express = require('express')
let router = express.Router()
let {
    addTeacher
} = require("../controllers/teacher")

router.route('/api/teacher').post(addTeacher)

module.exports = router