import React, { useContext, useState } from 'react'
import "./Register.css"
import axios from "axios"
import Swal from 'sweetalert2';

import { Link, useNavigate } from 'react-router-dom'
import { jobContext } from '../../usercontext/UserContext';
// const {serverUrl}=useContext(jobContext)

const Register = () => {
    const {serverUrl}=useContext(jobContext)
    const navigate = useNavigate()

    const [input, setInput] = useState({
        roll:"user",
        name:"",
       email:"",
        pass:"",

    })


    const handlechange = (e)=>{
        const{name,value}=e.target
        setInput((values)=>({...values, [name]:value}))

    }
    
    const saveData = async(e)=>{
        e.preventDefault()
        // console.log(input);
        try {
                    // post api backend me data send krne k liye


    const {data}= await axios.post(serverUrl+"/create",input,{
        withCredentials:true,
        // headers: { "Content-Type": "multipart/form-data" }
    })
    // console.log(data);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    
    // alert("Sign up successfull")
  
    // const{roll,name,email,pass}=input
    // const res = await fetch("http://localhost:5800/create",{
    //   method:"POST",
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify({
    //     roll,name,email,pass
    //   })
    // })
    // const data = await res.json()
    // console.log(data.message);
    // alert(data.message)
    navigate("/login")
            
        } catch (error) {
            // console.log(error.response.data.message);
            // alert(error.response.data.message)
                Swal.fire({
                            icon: "warning",
                            title: error.response.data.message,
                            confirmButtonColor: 'info',
                            confirmButtonText: 'Ok!'
                        })
            
            
        }


  
        
    }


    return (
        <div>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                               Create your  <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>free account and get started!</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 95%)" }}>
                              Join Job Seeker to discover top opportunities, apply with ease, and take your career to the next level.
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={saveData}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1">Name</label>
                                                    <input type="text" id="form3Example1"  value={input.name} name='name' onChange={handlechange} className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div data-mdb-input-init className="form-outline">
                                                    <label htmlFor="fname" className="form-label">
                                                        Roll
                                                    </label>
                                                    <select className="form-select" id='fname' name='roll' value={input.roll} onChange={handlechange}>
                                                        <option value="admin" >Admin</option>
                                                        <option value="user" >User</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            <input type="email" id="form3Example3"  value={input.email} name='email' onChange={handlechange} className="form-control" />
                                        </div>


                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <input type="password"  value={input.pass} name='pass' onChange={handlechange} id="form3Example4" className="form-control" />
                                        </div>
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>
                                         <p className='mt-2 text-center' onClick={() => navigate("/login")}>Already have an account ? <Link className='text-primary'>Login</Link></p>

                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Register
