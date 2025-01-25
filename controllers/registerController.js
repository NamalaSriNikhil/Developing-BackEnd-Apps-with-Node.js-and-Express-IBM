const User=require('../models/User')
const bcrypt = require('bcrypt')

const registerNewUser = async (req,res) => {
    try {
    const {uname,uemail,upwd} = req.body
    if(!uname || !uemail || !upwd) return res.sendStatus(500)
    const hashedpwd = await bcrypt.hash(upwd,10)
    const newuser = await User.create({name : uname,email : uemail,password : hashedpwd})
    res.json(newuser)
    } catch (e) {
        res.status(500).
        json({
            "message" : e.message
        })
    }
}

module.exports = {
    registerNewUser
}