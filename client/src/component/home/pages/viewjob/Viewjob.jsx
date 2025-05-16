import axios from 'axios'
import "./viewjob.css"
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { jobContext } from '../../../usercontext/UserContext'

const Viewjob = () => {
    const{serverUrl}=useContext(jobContext)

    const [viewData, setViewData] = useState([])
    const reverse = [].concat(viewData).reverse()
    // console.log(viewData);


    const viewjob = async () => {
        let res = await axios.get(serverUrl+"/getviewjob")
        // console.log(res.data);
        setViewData(res.data)

    }


    // for delete, single data
    const deleterecord = async (id) => {
        await axios.delete(serverUrl+`/deletejobrecord/${id}`).then((res) => {
            // console.log(res.data);

        })
        alert("Record deleted successfull")
        viewjob()

    }

    useEffect(() => {
        viewjob()
    }, [])
    return (
     <div className='viewjob pt-5' style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row pt-5">
      {reverse.map((d, i) => (
        <div className="col-lg-6 col-md-12 mb-4" key={i}>
          <div className="card shadow-sm h-100 border-0 rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold text-primary mb-3">
                {d.title.toUpperCase()}
              </h4>
              <p className="mb-1"><h5><strong> Country: </strong><span className="text-secondary">{d.country.toUpperCase()}</span></h5></p>
              <p className="mb-1"><h5><strong>City:</strong> <span className="text-secondary">{d.city}</span></h5></p>
              <p className="mb-1"><h5><strong>Category:</strong> <span className="badge bg-info text-dark">{d.category}</span></h5></p>
              <p className="mb-1"><h5><strong>Salary:</strong> <span className="text-success">{d.salary}</span></h5></p>
              <p className="mb-1"><h5><strong>Description:</strong> <span className="text-muted">{d.description.slice(0, 90)}...</span></h5></p>
              <p className="mb-3"><h5><strong>Location:</strong> <span className="text-secondary">{d.location}</span></h5></p>

              <div className="d-flex flex-wrap gap-3 mt-3">
                <Link to={`edit/${d._id}`} className="btn btn-outline-primary rounded-pill px-4">
                  Edit
                </Link>
                <button className="btn btn-outline-danger rounded-pill px-4" onClick={() => deleterecord(d._id)}>
                  Delete
                </button>
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

export default Viewjob
