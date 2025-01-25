const Review = require('../models/review')
const book = require('../models/book')
const User = require('../models/User')

const createreview = async (req,res)=>{
    try {
        const userid = req.user_id
        const bookid = req.params.id
        const {review}= req.body
        const newreview = await Review.create({book_isbn:bookid,user_id:userid,review:review})
        res.json(newreview)
    }catch(e){
        res.status(500).json({
            "message":e.message
        })
    }
}

const getreview = async(req,res)=>{
    try {
        const userid = req.user_id
        const bookid = req.params.id
        const {review}= req.body
        const newreview = await Review.find({book_isbn:bookid,user_id:userid},{review:1,_id:0})
        console.log(newreview)
        res.json(newreview)
    }catch(e){
        res.status(500).json({
            "message":e.message
        })
    }   
}

const updatereview = async(req,res)=>{
    try {
        const userid = req.user_id
        const bookid = req.params.id
        const {review}= req.body
        console.log(review)
        await Review.updateOne(
            {book_isbn:bookid},  // Filter condition
            { $set: { 'review': review } }  // Update the nested city field
          )
        const found=await Review.find({book_isbn:bookid})
        res.json(found)
    }catch(e){
        res.status(500).json({
            "message":e.message
        })
    }   
}

const deletereview = async(req,res)=>{
    try {
        const userid = req.user_id
        console.log(userid)
        const bookid = req.params.id
        console.log(bookid)
        const {review}= req.body
        console.log(review)
        await Review.updateOne(
            {book_isbn:bookid},  // Filter condition
            { $set: { 'review': '' } }  // Update the nested city field
          )
        const found=await Review.find({book_isbn:bookid})
        res.json(found)
    }catch(e){
        res.status(500).json({
            "message":e.message
        })
    }   
}

module.exports = {
    createreview,
    getreview,
    updatereview,
    deletereview
}