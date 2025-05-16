import React, { useContext, useState } from 'react'
import "./apply.css"
import { useNavigate } from 'react-router-dom'
import { jobContext } from '../../../usercontext/UserContext'
import axios from 'axios'

const ApplyNow = () => {
    const {serverUrl,userData}=useContext(jobContext)
    const navigate =useNavigate()
    const [input, setInput]=useState({
        userId:userData._id,
        name:"",
        email:"",
        phone:"",
        address:"",
        discribe:"",
      
        img:"https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916161.jpg",

        
    })

    const handlechange =(e)=>{
    const{name,value}= e.target
    setInput((values)=>({...values,[name]:value}))
    }
    const saveData= async(e)=>{
       


        try {
            e.preventDefault()
           let application= await axios.post(serverUrl+"/applynow",input)
           console.log(application);
          

           if(!application.data.message){
            alert("apply successfull")

            navigate('/myapplication')
           }else{
            alert(application.data.message)
           }
           

            // const{name,email,phone,address,discribe,file,img}=input
            // const res = await fetch("http://localhost:5800/applynow",{
            //   method:"POST",
            //   headers:{"Content-Type":"application/json"},
            //   body:JSON.stringify({
            //     name,email,phone,address,discribe,file,img
            //   })
            // })
            // const data = await res.json()
            // console.log(data);
            // if(data.massege){
            //     alert(data.massege)
            // }else if(!data.massege){
            //     alert("Your Application Apply Successful")
            //     navigate('/myapplication')
            // }
            
           
            // console.log(data);
              
        } catch (error) {
            alert(error.response.data.message)
            console.log(error.response.data.message);
            
            
        }


        // localStorage.setItem("applynow",JSON.stringify(input))
        // console.log(input);

        // post api backend me data send krne k liye
   
        
    }


    return (
      <div className="pt-5" style={{ backgroundColor: "#f5f7fa", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
  <div className="container py-5">
    <div className="row justify-content-center align-items-center">
      
      {/* Left Image */}
      <div className="col-md-6 mb-4">
        <img
          src="https://i.imgur.com/VRFiMzM.png"
          alt="Contact"
          className="img-fluid rounded-4 shadow"
        />
      </div>

      {/* Form Section */}
      <div className="col-md-6">
        <div className="card shadow-lg border-0 p-4 rounded-4 bg-white">
          <h3 className="text-center mb-4 text-primary fw-bold">Apply Now</h3>
          <form onSubmit={saveData}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={input.name} name="name" onChange={handlechange} placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={input.email} name="email" onChange={handlechange} placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" value={input.phone} name="phone" onChange={handlechange} placeholder="Your phone number" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" value={input.address} name="address" onChange={handlechange} placeholder="Your address" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Describe Yourself</label>
              <textarea className="form-control" rows="4" value={input.discribe} name="discribe" onChange={handlechange} placeholder="Write something about you..." required></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary fw-bold rounded-pill">
                Send Application
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>

    )
}

export default ApplyNow
