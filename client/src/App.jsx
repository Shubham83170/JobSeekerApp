import React, { useContext } from 'react'


import './App.css'

import { Route, Routes } from 'react-router-dom'
// import Header from './component/home/layout/Header'
import Landingpage from './component/home/pages/Landingpage'
import Register from './component/auth/register/Register'
import Login from './component/auth/login/Login'
import LayOutHome from './component/home/layout/LayOutHome'
import JobPost from './component/home/pages/jobpost/JobPost'
import Viewjob from './component/home/pages/viewjob/Viewjob'
import AllJob from './component/home/pages/alljob/AllJob'
import DetailPage from './component/home/pages/detail/DetailPage'
import ApplyNow from './component/home/pages/applynow/ApplyNow'
import MyApplication from './component/home/pages/myapplication/MyApplication'
import Applicants from './component/home/pages/applicants/Applicants'
import { jobContext } from './component/usercontext/UserContext'

// export const jobContext = createContext()
const App = () => {

  let {userData,loading}=useContext(jobContext)
  if (loading) {
    return <h4 className='text-center mt-5 pt-5'>Loading...</h4>; // or a spinner
  }

  




  return (
    


   <Routes>
    <Route path='/' element={<LayOutHome> {userData?<Landingpage/>:<Login/>}</LayOutHome>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

    
    <Route path='/jobpost' element={<LayOutHome><JobPost/></LayOutHome>}/>
    <Route path='/alljob' element={<LayOutHome><AllJob/></LayOutHome>}/>
    <Route path='/detail/:id' element={<LayOutHome><DetailPage/></LayOutHome>}/>
    <Route path='/applynow' element={<LayOutHome><ApplyNow/></LayOutHome>}/>
    <Route path='/myapplication' element={<LayOutHome><MyApplication/></LayOutHome>}/>
    <Route path='/applicants' element={<LayOutHome><Applicants/></LayOutHome>}/>
 
    <Route path='/viewjob' element={<LayOutHome><Viewjob/></LayOutHome>}/>
    <Route path='/viewjob/edit/:id' element={<LayOutHome><JobPost/></LayOutHome>}/>

    
   </Routes>

 
  )
}

export default App
