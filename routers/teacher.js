let express = require('express')
let router = express.Router()
let {
    addTeacher,
    getTeacher,
    updataTeacher,
    deleteTeacher
} = require("../controllers/teacher")

router.route('/').post(addTeacher).get(getTeacher)
router.route('/:id').put(updataTeacher).get(getTeacher).delete(deleteTeacher)
module.exports = router