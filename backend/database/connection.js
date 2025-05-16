const mongoose = require('mongoose')

const db = "mongodb+srv://shubham-mongodb:mongodb20@cluster0.uidq2xz.mongodb.net/mern"
mongoose.connect(db).then((d)=>{
    console.log('db is ok');
    
}).catch((err)=>{
    console.log(err);
    
})

module.exports = mongoose