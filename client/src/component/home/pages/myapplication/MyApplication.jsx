import React, { useContext, useEffect, useState } from 'react'
// import { jobContext } from '../../../../App'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { jobContext } from '../../../usercontext/UserContext'

const MyApplication = () => {
    let {userData,serverUrl}=useContext(jobContext)

    // const { myApplication, applicationApi, isLogin } = useContext(jobContext)
    // console.log(myApplication);

    // const findUser= myApplication.find((res)=>res.)
    // const myApplicationInLocalStorage = localStorage.getItem("applynow")
    // const myApplicationInLocalStorage2 = JSON.parse(myApplicationInLocalStorage)
    // console.log(myApplicationInLocalStorage2);

    // const applicationRemove =()=>{
    //     localStorage.removeItem("applynow")
    //     alert("Application delete successfuly")


    // }
    const [input, setInput] = useState([])
    const[application, setMyApplication]= useState([])
    // const reverse = [].concat(input).reverse()
    // const myApplication = reverse[0]
    // console.log(myApplication);

    const getMyApplication = async () => {
        const res = await axios.get(serverUrl+"/myapplication",{
            withCredentials:true
        })
        const findUserApplication = res.data.filter((application)=>application.userId == userData._id )
        setMyApplication(findUserApplication)
        setInput(res.data)

    }

    const deleterecord = async (id) => {
        await axios.delete(serverUrl+`/deletemyapplication/${id}`).then((res) => {
            console.log(res.data);

        })
        alert("Record deleted successfull")
        getMyApplication()

    }


    useEffect(() => {
        // applicationApi()
        getMyApplication()
    }, [])
    return (
    <div className='pt-5' style={{ minHeight: "100vh", backgroundColor: "#f0f2f5", fontFamily: "'Segoe UI', sans-serif" }}>
  <div className="container pt-5">
    <h2 className="text-center mb-5 fw-bold text-primary display-5">My Applications</h2>

    <div className="row g-4">
      {application.map((d, i) => (
        <div className="col-12" key={i}>
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="row g-0 align-items-center">

              {/* Image Side */}
              <div className="col-md-4 bg-light d-flex justify-content-center align-items-center p-3">
                <img
                  src={d.img || "https://via.placeholder.com/250"}
                  alt="User"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              </div>

              {/* Content Side */}
              <div className="col-md-8 p-4">
                <h4 className="fw-bold text-dark mb-3">👤 {d.name}</h4>
                <p className="mb-2"><strong>📧 Email:</strong> <span className="text-muted">{d.email}</span></p>
                <p className="mb-2"><strong>📱 Phone:</strong> <span className="text-muted">{d.phone}</span></p>
                <p className="mb-2"><strong>🏠 Address:</strong> <span className="text-muted">{d.address}</span></p>
                <p className="mb-3"><strong>📝 Description:</strong> <span className="text-muted">{d.discribe}</span></p>
                
                <div className="mt-3">
                  <button
                    onClick={() => deleterecord(d._id)}
                    className="btn btn-outline-danger rounded-pill px-4 fw-semibold"
                  >
                    🗑️ Delete Application
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    )
}

export default MyApplication
