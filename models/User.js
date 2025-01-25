const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true,"Name is required"]
    },
    email:{
        type:String,
        unique : true,
        lowercase : true,
        required : [true,"Email is required"]
    },
    password:{
        type:String,
        minlength : 8,
        required : [true,"Password is required"]
    }
})



module.exports = mongoose.model("users",userSchema)