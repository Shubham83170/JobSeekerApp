const jwt = require("jsonwebtoken")

const checkAuth = (req,res,next)=>{
    try {
        let token = req.cookies.token
        if(!token){
            return res.status(401).json({message:"user is not authenticate"})
        }

        let decoded = jwt.verify(token,process.env.JWT_SECRET_TOKEN)

        req.userId = decoded.id
        next()
        
    } catch (error) {
        return res.status(500).json({message:`${error}`})

        
    }
}

module.exports = checkAuth