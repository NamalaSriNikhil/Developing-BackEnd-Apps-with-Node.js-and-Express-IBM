const Book=require('../models/book')

const createBook = async(req,res)=>{
    try {
        const {title,author,isbn,description} =req.body
    if(!title || !author || !isbn || !description) return res.status(400).json({"message":"Fill all the required fields"})
    const book=await Book.create({Title:title,Author:author,ISBN:isbn,Description:description})
    console.log(book)
    res.status(200).json(book)
    } catch(e){
        res.status(500).json({
            "message" : e.message
        })
    }
}

const getallbooks = async (req,res) =>{
    try{
        const allbooks=await Book.find()
        console.log(allbooks)
        res.json(allbooks)
    }catch(e){
        res.json({
            "message":e.message
        })
    }
}

const getbyisbn = async (req,res)=> {
    try{
        const isbn = req.params.id
        if(!isbn) res.sendStatus(400)
        const foundbook = await Book.find({ISBN:isbn})
        console.log(foundbook)
        res.json(foundbook)
    }catch(e){
        res.status(500).json({
            "message" : e.message
        })
    }
}

const getbyauthor = async (req,res)=>{
    try{
        const author = req.params.id
        if(!author) res.sendStatus(400)
        const foundbook = await Book.find({Author:author})
        console.log(foundbook)
        res.json(foundbook)
    }catch(e){
        res.status(500).json({
            "message":e.message
        })
    }
}

const getbytitle = async (req,res)=>{
    try{
        const title = req.params.id
        if(!title) res.sendStatus(400)
        const foundbook = await Book.find({Title:title})
        console.log(foundbook)
        res.json(foundbook)
    }catch(e){
        res.status(500).json({
            "message":e.message
        })
    }
}


module.exports = {
    createBook,
    getbyisbn,
    getallbooks,
    getbyauthor,
    getbytitle,
}