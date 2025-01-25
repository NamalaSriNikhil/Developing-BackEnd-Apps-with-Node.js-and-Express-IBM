const jwt=require('jsonwebtoken')
require('dotenv').config()

const verifyjwt = (req,res,next) => {
    const authheader = req.headers['authorization']
    if(!authheader) return res.sendStatus(401)
    const token = authheader.split(" ")[1]
    jwt.verify(
        token,
        process.env.JWT_ACCESS_TOKEN,
        (err,decoded)=>{
            if(err) return res.status(403).json({"message":err.message})
            req.user_id=decoded.userid
        console.log("req.user",req.user_id)
            next()
        }
    )
}

module.exports = verifyjwt