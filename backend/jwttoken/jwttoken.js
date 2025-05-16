const jwt = require("jsonwebtoken")
const generateToken = (id)=>{
    token = jwt.sign({id},process.env.JWT_SECRET_TOKEN,{expiresIn:"7d"})
    return token
}

module.exports = generateToken