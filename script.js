const mongoose = require("mongoose")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3200;

app.use(express.json())

mongoose.connect("mongodb://localhost/empdb").then(()=>{
    console.log("Connected")
})


app.use('/register',require('./routes/register'))
app.use('/login',require('./routes/login'))
app.use('/book',require('./routes/books'))

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})