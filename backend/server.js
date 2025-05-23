const express = require('express')
const path = require('path')
const myapp = express()
const cors = require('cors')
const cookieParser = require("cookie-parser")
require('dotenv').config()
const port = process.env.port || 6800
require('./database/connection')
const myroute = require('./routes/myroutes')
myapp.use(cors({
    origin:"https://jobseekerapp-4.onrender.com",
    credentials:true
}))
myapp.use(express.json()) //ye line hamesh app.use(myroutes) eske upr rhega 
myapp.use(cookieParser()) //ye line hamesh app.use(myroutes) eske upr rhega 
myapp.use(myroute)


// //  Correct path to serve React's dist folder
// myapp.use(express.static(path.join(__dirname, '../client/dist')))

// // Correct fallback for SPA routing
// myapp.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
// })



myapp.listen(port,()=>{
    console.log(`running on this port ${port}`);
    
})