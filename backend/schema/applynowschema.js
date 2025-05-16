const mongoose = require('mongoose')
const mypattern = new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
   
    phone:{
        type:String
    },
    address:{
        type:String
    },
    discribe:{
        type:String
    },
    img:{
        type:String
    }
   
})

const applynowschema = new mongoose.model("applynow",mypattern)
module.exports = applynowschema