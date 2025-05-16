const mongoose = require('mongoose')
const mypattern = new mongoose.Schema({
    title:{
        type:String
    },
    category:{
        type:String
    },
   
    country:{
        type:String
    },
    city:{
        type:String
    },
    location:{
        type:String
    },
    salary:{
        type:String
    },
    description:{
        type:String
    },
})

const jobpostschema = new mongoose.model("jobpost",mypattern)
module.exports = jobpostschema