const express = require('express')
const router = express.Router()
const authcontroller = require('../controllers/authController')

router.post('/',authcontroller.authhandler)

module.exports = router