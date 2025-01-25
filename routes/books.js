const express = require('express')
const router = express.Router()
const bookcontroller= require('../controllers/bookController')
const reviewcontroller = require('../controllers/reviewController')

const verifyjwt = require('../middleware/verifyjwt')

router.route('/')
        .get(bookcontroller.getallbooks)
        .post(bookcontroller.createBook)
        
router.route('/isbn/:id')
    .get(bookcontroller.getbyisbn)
router.route('/author/:id')
    .get(bookcontroller.getbyauthor)
router.route('/title/:id')
    .get(bookcontroller.getbytitle)
router.route('/:id/review')
    .get(verifyjwt,reviewcontroller.getreview)
    .post(verifyjwt,reviewcontroller.createreview)
    .put(verifyjwt,reviewcontroller.updatereview)
    .delete(verifyjwt,reviewcontroller.deletereview)
module.exports =router 