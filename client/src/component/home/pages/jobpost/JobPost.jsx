import React, { useContext, useEffect, useState } from 'react'
// import "./JobPost.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { jobContext } from '../../../usercontext/UserContext'

const JobPost = () => {
    const{serverUrl}=useContext(jobContext)
const{id}=useParams()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        title: '',
        category: '',
        country: '',
        city: '',
        location: '',
        salary: '',
        description: '',

    })
    const handler = (e) => {
        const { name, value } = e.target
        setInput((values) => ({ ...values, [name]: value }))
    }

    const saveData = async (e) => {
        e.preventDefault()
        // console.log(input);

        if(id){
            // Patch api for edit single data
      const{title, category, country, city, location, salary, description}=input
      const res = await fetch(serverUrl+`/updatejobrecord/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title, category, country, city, location, salary, description
          })
      })
      const data = await res.json();
      // console.log(data);
        }else{
                 // post api backend me data send krne k liye
        const { title, category, country, city, location, salary, description } = input
        const res = await fetch(serverUrl+"/jobpost", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title, category, country, city, location, salary, description
            })
        })
        const data = await res.json()
        // console.log(data);
        }

      alert("new job post successful")

        navigate('/alljob')

    }
    // for edit. jobpost k input field me data feel krne k liye
    useEffect(()=>{
        if(id){
            const editproduct = async()=>{
              const res = await axios.get(serverUrl+`/jobedit/${id}`)
              // console.log(res.data);
              
              setInput(res.data)
            }
            editproduct()
          }

    },[])
    return (
    <div className='pt-5 mt-5 '  style={{ minHeight: "100vh" }} >
  <div className="container">
    <h3 className="mb-4 text-center">{id ? "UPDATE JOB" : "POST NEW JOB"}</h3>
    
    <form onSubmit={saveData}>
      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <input 
            type="text" 
            className="form-control" 
            name='title' 
            value={input.title} 
            onChange={handler} 
            placeholder="Job Title" 
            required 
          />
        </div>

        <div className="col-md-6 mb-3">
          <select 
            className="form-select" 
            name='category' 
            onChange={handler} 
            required
          >
            <option value="">Select Category</option>
            <option value="Graphics & Design">Graphics & Design</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Frontend Web Development">Frontend Web Development</option>
            <option value="MERN Stack Development">MERN STACK Development</option>
            <option value="Account & Finance">Account & Finance</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Video Animation">Video Animation</option>
            <option value="MEAN Stack Development">MEAN STACK Development</option>
            <option value="MEVN Stack Development">MEVN STACK Development</option>
            <option value="Data Entry Operator">Data Entry Operator</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <input 
            type="text" 
            className="form-control" 
            name='country' 
            value={input.country} 
            onChange={handler} 
            placeholder="Country" 
            required 
          />
        </div>

        <div className="col-md-6 mb-3">
          <input 
            type="text" 
            className="form-control" 
            name='city' 
            value={input.city} 
            onChange={handler} 
            placeholder="City" 
            required 
          />
        </div>
      </div>

      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          name='location' 
          value={input.location} 
          onChange={handler} 
          placeholder="Location" 
          required 
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <select 
            className="form-select" 
            name='salary' 
            onChange={handler} 
            required
          >
            <option value="">Select Salary Type</option>
            <option value="Fixed Salary">Fixed Salary</option>
            <option value="Ranged Salary">Ranged Salary</option>
          </select>
        </div>

        {/* Salary inputs can be conditionally shown here based on selected salary type */}
        <div className="col-md-6">
          {/* Conditional salary fields here if needed */}
        </div>
      </div>

      <div className="mb-3">
        <textarea 
          className="form-control" 
          rows="3" 
          name='description' 
          value={input.description} 
          onChange={handler} 
          placeholder="Job Description" 
          required 
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {id ? "Update" : "Create Job"}
      </button>
    </form>
  </div>
</div>

    )
}

export default JobPost
