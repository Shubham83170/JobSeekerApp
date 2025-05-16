import axios from 'axios'
import "./alljob.css"
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { jobContext } from '../../../usercontext/UserContext'

const AllJob = () => {
  const{serverUrl}=useContext(jobContext)
    const [viewData, setViewData] = useState([])
    const reverse = [].concat(viewData).reverse()
    // console.log(viewData);


    const viewAllJob = async () => {
        let res = await axios.get(serverUrl+"/getviewjob")
        // console.log(res.data);
        setViewData(res.data)

    }

    useEffect(() => {
        viewAllJob()
    }, [])


    return (
      <div className='alljob pt-5' style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
  <div className="container py-5">
    <h2 className="text-center fw-bold mb-4">Available Jobs</h2>
    <div className="row">
      {reverse.map((d, i) => (
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={i}>
          <div className="card h-100 shadow-lg border-0 rounded-4">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary px-3 py-2 rounded-pill">{d.category}</span>
                  <small className="text-muted fw-semibold">{d.country.toUpperCase()}</small>
                </div>
                <h5 className="card-title fw-bold">{d.title.slice(0, 25)}</h5>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{d.description.slice(0, 60)}...</p>
              </div>
              <Link to={`/detail/${d._id}`} className="btn btn-outline-primary mt-4 fw-bold w-100 rounded-pill">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}

export default AllJob
