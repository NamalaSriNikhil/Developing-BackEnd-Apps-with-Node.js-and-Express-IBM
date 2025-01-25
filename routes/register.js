const express = require('express')
const router = express.Router()
const regcontroller = require('../controllers/registerController')

router.post('/',regcontroller.registerNewUser)

module.exports = router