const mongoose = require('mongoose')
const mypattern = new mongoose.Schema({
    roll:{
        type:String
    },
    name:{
        type:String
    },
   
    email:{
        type:String
    },
    pass:{
        type:String
    },
},{timestamps:true})

const myschema = new mongoose.model("register",mypattern)
module.exports = myschema