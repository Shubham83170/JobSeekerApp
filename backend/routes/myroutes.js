const express = require('express')
const myroute = express.Router()
const myschema = require('../schema/myschema')
const bcrypt = require("bcryptjs")
const jobpostschema = require('../schema/jobpostschema')
const applynowschema = require('../schema/applynowschema')
const generateToken = require('../jwttoken/jwttoken')
const checkAuth = require('../midleware/checkauth')



myroute.get('/home',(req,res)=>{
    res.send('homme')

})

// ==========Register data==============
// post api,
myroute.post('/create',async(req,res)=>{
    try {
        const {roll,name,email,pass}=req.body

        if(!roll||!name||!email||!pass){
            return res.status(400).json({message:"send all data"})
        }
    
        const existUser = await myschema.findOne({email})
        if(existUser){
            return res.status(400).json({message: "User Already Exist"})
        }
    
        const hashPass = await bcrypt.hash(pass, 10)
    
    
        const addUser =await myschema.create({
            roll,name,email,pass:hashPass
    
        })
    
        let token = generateToken(addUser._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure: process.env.NODE_ENVIRONMENT === "production",
            sameSite:"none",
            maxAge:7*24*60*60*1000
    
        })
        // console.log(token);
        
    
        // const adduser = new myschema({
        //     roll,name,email,pass
        // });
        // await adduser.save()
        return res.status(201).json(addUser)
        // console.log(addUser);
        
    } catch (error) {
        res.status(404).json({ message: `${error}` })

        
    }
   
    
})

myroute.post("/login",async(req,res)=>{
    try {
        let {email,pass}=req.body
        if(!email||!pass){
            return res.status(400).json({message:"Send All Data"})
        }
        const existUser = await myschema.findOne({email})
        if(!existUser){
            return res.status(404).json({message:"User Does Not Exist"})
        }
    
        const matchPassword = await bcrypt.compare(pass,existUser.pass)
        if(!matchPassword){
            return res.status(401).json({message:"Incorrect Password"})
        }
        const token= generateToken(existUser._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENVIRONMENT === "production",
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
    
        res.status(200).json({
           user:{
            name:existUser.name,
            roll:existUser.roll,
            email:existUser.email,
       
           }
    
        })
        
    } catch (error) {
        res.status(404).json({ message: `${error}` })
        
    }

   

})

// To fetch data only for the authenticated user

myroute.get("/getuserdata",checkAuth,async(req,res)=>{
    try {
        let userId = req.userId
        if(!userId){
            return res.status(400).json({message:"User Id Not Found"})
        }
        let user =await myschema.findById(userId)
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(500).json({ message: error })
        
    }
})

// for log out

myroute.post("/logout",(req,res)=>{
    try {
        res.clearCookie("token")
        res.status(200).json({message: "Log Out Successfull"})
        
    } catch (error) {
        res.status(404).json({ message: `${err}` })
        
    }
})

// get api
myroute.get('/getdata',async(req,res)=>{
    const alldata = await myschema.find()
    res.json(alldata)
})


// ========job post============
// post api, job post schema

myroute.post('/jobpost',async(req,res)=>{
    const {title,category,country,city,location,salary,description}=req.body
    const adduser = new jobpostschema({
        title,category,country,city,location,salary,description
    });
    await adduser.save()
    res.status(200).json(adduser)
    // console.log(adduser);
    
})

// get api for view job
myroute.get('/getviewjob',async(req,res)=>{
    const alldata = await jobpostschema.find()
    res.json(alldata)
})

// for edit. Job post field me data fill krne k liye
myroute.get('/jobedit/:id', async(req,res)=>{
    const{id}=req.params
    const edit = await jobpostschema.findById({_id:id})
    res.json(edit)
    // console.log(edit)
})

// patch api for  Job post field me single data edit krne k liye
myroute.patch("/updatejobrecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await jobpostschema.findByIdAndUpdate(id,req.body,{new:true});
    // console.log(recordupdate);
    res.status(201).json(recordupdate);
});


//  delete api for single data
myroute.delete("/deletejobrecord/:id",async(req,res)=>{
    const {id}=req.params
    const a = await jobpostschema.findByIdAndDelete({_id:id})
    // console.log(a);
    res.status(200).json(a)
    
})

// veiw single data of detail page
myroute.get('/singledata/:id', async(req,res)=>{
    const{id}=req.params
    const singledata = await jobpostschema.findById({_id:id})
    res.json(singledata)
    // console.log(singledata)
})

// ===========apply now======
// post api,
myroute.post('/applynow',async(req,res)=>{

    try {
       
        const {userId, name,email,phone,address,discribe,img}=req.body

        if(!name||!email||!phone||!address||!discribe||!img){
            return res.status(404).json({ message: "fill all data" })
        }
        const existUser = await myschema.findOne({email})
    
        if(!existUser){
            return res.status(400).json({ message: "user does not exist" })
    
        }
    
        const user =await applynowschema.create({
           userId, name,email:existUser.email,phone,address,discribe,img
        })
        console.log(user);
        
    
        return res.status(201).json(user)
        
    } catch (error) {
        res.status(404).json({ message: `${error}` })
        
    }
   

    // const adduser = new applynowschema({
    //     name,email,phone,address,discribe,img
    // });
    // await adduser.save()
    // res.status(200).json(adduser)
    // console.log(adduser);
    
})


// get api
myroute.get('/myapplication',checkAuth,async(req,res)=>{
     let userId = req.userId
        if(!userId){
            return res.status(400).json({ message: "user id not found" })

        }
        let userData = await myschema.findById(userId)
        if(!userData){
            return res.status(400).json({ message: "user not found" })
        
        }
    const alldata = await applynowschema.find()
    res.json(alldata)
})

// delete api
myroute.delete("/deletemyapplication/:id",async(req,res)=>{
    const {id}=req.params
    const a = await applynowschema.findByIdAndDelete({_id:id})
    // console.log(a);
    res.status(200).json(a)
    
})




module.exports = myroute