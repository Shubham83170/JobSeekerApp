import React, { useContext, useEffect, useState } from 'react'
import "./Login.css"
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'
// import { jobContext } from '../../../App'
import axios from 'axios';
import { jobContext } from '../../usercontext/UserContext';

const Login = () => {
    const {userData,setUserData,getUserData,serverUrl } = useContext(jobContext)
    const navigate = useNavigate()


    const [loginInput, setLoginInput] = useState({
        email: "",
        pass: "",
    })

    const handlerChange = (e) => {

        const { name, value } = e.target
        setLoginInput((values) => ({ ...values, [name]: value }))

    }

    const saveData = async(e) => {
        
        try {
            e.preventDefault()
            const {data }= await axios.post(serverUrl+"/login",loginInput,{
                withCredentials:true
            })
            Swal.fire({
                title: "Login Successful",
                icon: "success",
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok!'
            })
            // console.log(data.user);
            
            
            setUserData(data.user)
            await getUserData()

            navigate("/")
           
                // alert("Login Successful");
                
         

            
        } catch (error) {
            // console.log(error);
            Swal.fire({
                icon: "warning",
                title: error.response.data.message,
                confirmButtonColor: 'info',
                confirmButtonText: 'Ok!'
            })

         
            // alert(error.response.data.message)
            
            
        }
       

    }
// useEffect(()=>{
//     registerApi()
// })

    return (
        <div>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                and take <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>one step closer to your career goals.</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 95%)" }}>
                              Sign in to access exclusive job postings, manage your applications, and stay connected with the latest career opportunities.
Your next opportunity is just one login away.
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={saveData}>




                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            <input type="email" id="form3Example3" value={loginInput.email} name='email' onChange={handlerChange} className="form-control" />
                                        </div>


                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <input type="password" id="form3Example4" value={loginInput.pass} name='pass'
                                                onChange={handlerChange} className="form-control" />
                                        </div>
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                            Login
                                        </button>
                                       
                                        
                                        <p className='mt-3 text-center' onClick={()=>navigate("/register")}>Want to create new account ? <Link className='text-primary'>Sign Up</Link></p>
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

export default Login
