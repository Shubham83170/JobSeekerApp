import axios from 'axios';
import "./detail.css"
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { jobContext } from '../../../usercontext/UserContext';
// import { jobContext } from '../../../../App';

const DetailPage = () => {

  const { id } = useParams()
  const { detailPage,userData,serverUrl } = useContext(jobContext)
  // console.log(isLogin);


  const [singledata, setSingledata] = useState({})
  // console.log(singledata);


  const singledataview = async () => {
    const res = await axios.get(serverUrl+`/singledata/${id}`)
    setSingledata(res.data)

  }

  useEffect(() => {
    singledataview()
  }, [id])



  return (
<div className="detail pt-5" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: "'Poppins', sans-serif" }}>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-8">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <div className="card-body">
            <h3 className="card-title fw-bold mb-4 text-center text-primary">
              {singledata.title}
            </h3>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <strong className="text-dark">Country:</strong>
                <span className="text-muted ms-2">{singledata.country}</span>
              </li>
              <li className="list-group-item">
                <strong className="text-dark">City:</strong>
                <span className="text-muted ms-2">{singledata.city}</span>
              </li>
              <li className="list-group-item">
                <strong className="text-dark">Category:</strong>
                <span className="text-muted ms-2">{singledata.category}</span>
              </li>
              <li className="list-group-item">
                <strong className="text-dark">Salary:</strong>
                <span className="text-muted ms-2">{singledata.salary}</span>
              </li>
              <li className="list-group-item">
                <strong className="text-dark">Location:</strong>
                <span className="text-muted ms-2">{singledata.location}</span>
              </li>
              <li className="list-group-item">
                <strong className="text-dark">Description:</strong>
                <p className=" mt-2">{singledata.description}</p>
              </li>
            </ul>

            {userData.roll === "user" && (
              <div className="text-center">
                <Link to="/applynow" className="btn btn-success rounded-pill px-4 fw-semibold">
                  Apply Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default DetailPage
