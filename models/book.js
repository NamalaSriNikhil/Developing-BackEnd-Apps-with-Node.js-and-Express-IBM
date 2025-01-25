const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    Title : {
        type:String,
        required : [true,"Title is Required"]
    },
    Author : {
        type:String,
        required : [true,"Author Name is Required"]
    },
    ISBN : {
        type:Number,
        required : [true,"ISBN is Required"]
    },
    Description : {
        type:String,
        required : [true,"Title is Required"]
    }
})

module.exports = mongoose.model("books",BookSchema)