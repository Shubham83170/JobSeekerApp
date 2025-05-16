import React, { useEffect } from 'react'
import { useContext } from 'react'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'
import { jobContext } from '../../usercontext/UserContext';
import axios from "axios"
import "./navbar.css"
// import { jobContext } from '../../../App'

const Navbar = () => {
  const {userData, serverUrl, setUserData, getUserData} = useContext(jobContext)
  
  

  const navigate = useNavigate()

  const logOut = async()=>{

    try {
    
 const{data}=await axios.post(serverUrl+"/logout",{},{
  withCredentials:true
})
// console.log(data);

setUserData(null)
getUserData()

      
    } catch (error) {
      console.log(error);
      
    }

 


  }
  return (
<div className="header-side-menu shadow-sm">
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
    <div className="container-fluid">
      
      {/* Brand */}
      <Link className="navbar-brand fw-bold fs-4" to="/">JOB SEEKER</Link>

      {/* Toggler for Mobile */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Links */}
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          {userData && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/alljob">All Jobs</Link>
              </li>

              {userData?.roll === "admin" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/applicants">Applicants</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/jobpost">Post Job</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/viewjob">Your Jobs</Link>
                  </li>
                </>
              )}

              {userData?.roll === "user" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/myapplication">My Applications</Link>
                </li>
              )}
            </>
          )}
        </ul>

        {/* Right Side Button */}
        <div className="d-flex">
          {userData ? (
            <div className="dropdown">
              <button className="btn btn-outline-primary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {userData?.name}
              </button>
              <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="userDropdown">
                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                <li><Link className="dropdown-item" onClick={() => logOut()} to="#">Log Out</Link></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
          )}
        </div>
      </div>
    </div>
  </nav>
</div>


  )
}

export default Navbar
