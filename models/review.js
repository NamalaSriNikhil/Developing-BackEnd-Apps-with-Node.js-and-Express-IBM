const mongoose = require('mongoose')
const Book=require('../models/book')
const User = require('../models/User')


const reviewSchema = new mongoose.Schema({
    book_isbn : {
        type: Number,
        unique:true,
        required: true
    },
    user_id : {
        type: mongoose.Types.ObjectId,
        ref:User,
        required: true
    },
    review : {
        type: String,
        required: true
    }
})

module.exports=mongoose.model("Review",reviewSchema)