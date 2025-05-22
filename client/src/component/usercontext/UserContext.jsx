import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const jobContext = createContext()

const UserContext = ({children}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [userData, setUserData]=useState(null)
  
  const serverUrl = "https://jobseekerapp-1.onrender.com"
  // const serverUrl = "http://localhost:5800"
  const getUserData = async()=>{
    try {
      let{data }=await axios.get(serverUrl + "/getuserdata",{
        withCredentials:true
      })
      setUserData(data)
      // console.log(data);
      
    } catch (error) {
      navigate("/login")
      // console.log(error)
      
    }finally {
      setLoading(false); // done loading regardless of success or fail
    }
  }

    // get register data
  const [registerData, setRegisterData]=useState({})

  const registerApi= async()=>{
    const res = await axios.get(serverUrl+'/getdata')
    setRegisterData(res.data)
    // console.log(res.data);
    }

    // get my application data
    const [ myApplication,setMyApplication]=useState([])
    const applicationApi=async()=>{
      const res = await axios.get(serverUrl+'/myapplication',{
        withCredentials:true
      })
      setMyApplication(res.data)

    }

  
    


    useEffect(()=>{
      getUserData()
      
    },[])


    const value ={
        registerData,loading,registerApi,applicationApi,myApplication,userData,setUserData,getUserData,serverUrl
    }
  return (
    <jobContext.Provider value={value}>
        {children}
    </jobContext.Provider>
  )
}

export default UserContext