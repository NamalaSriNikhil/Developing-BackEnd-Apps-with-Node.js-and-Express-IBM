const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/User')

const authhandler = async (req,res) => {
    try {
    const {email,pwd} = req.body
    console.log(email,pwd)
    if(!email || !pwd) res.status(400).json({"message":"Both email and password are required"})
    const founduser = await User.find({email:email})
    if(!founduser) res.status(400).json({"message":"User is not registered"})
    // console.log(founduser)
    // console.log(pwd,founduser[0].password)
    const match =await bcrypt.compare(pwd,founduser[0].password)
    console.log(match)
    if(match){
        const accesstoken = jwt.sign(
            { "userid" : founduser[0]._id},
            process.env.JWT_ACCESS_TOKEN,
            {'expiresIn': '3m'}
        )
        res.status(200).json({accesstoken})
    } else {
        res.status(400).json({"message": "Enter Correct password"})
    }
    } catch(e) {
        res.status(500).json({
            "message" : e.message
        })
    }
}

module.exports = {
    authhandler
}