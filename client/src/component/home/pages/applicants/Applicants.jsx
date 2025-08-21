import React, { useContext, useEffect } from 'react'
// import { jobContext } from '../../../../App'
import "./applicant.css"
import { jobContext } from '../../../usercontext/UserContext'

const Applicants = () => {

  const { myApplication, applicationApi } = useContext(jobContext)


  useEffect(() => {
    applicationApi()

  }, [])
  return (
  <div className='applicants pt-5'>
  <div className="container pt-5">
    <div className="row">
      {
        myApplication.map((d, i) => (
          <div className="col-12 mb-4" key={i}>
            <div className="card shadow-sm h-100">
              <div className="row g-0">
                
                {/* Text Section */}
                <div className="col-md-8 col-12">
                  <div className="card-body">
                    <h5 className="card-title">NAME: <span>{d.name.toUpperCase()}</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">EMAIL: <span>{d.email}</span></h6>
                    <h6 className="card-subtitle mb-2 text-muted">PHONE: <span>{d.phone}</span></h6>
                    <h6 className="card-subtitle mb-2 text-muted">ADDRESS: <span>{d.address}</span></h6>
                    <h6 className="card-subtitle mb-2 text-muted">JOB TITLE: <span>{d.discribe.slice(0, 60)}...</span></h6>
                  </div>
                </div>

                {/* Image Section */}
                <div className="col-md-4 col-12 d-flex align-items-center justify-content-center p-3">
                  <img 
                    src={d.img} 
                    alt="applicant" 
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ maxHeight: '200px', objectFit: 'cover' }} 
                  />
                </div>

              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>

  )
}

export default Applicants
