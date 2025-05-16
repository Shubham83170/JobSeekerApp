import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { jobContext } from '../../usercontext/UserContext'
// import { jobContext } from '../../../App'

const Landingpage = () => {

const {userData}=useContext(jobContext)

    return (
      <div className='pt-5'>

  {/* Hero Section */}
  <section className="hero d-flex align-items-center" style={{ minHeight: "580px" }}>
    <div className="container text-center text-md-start">
      <h1 className="display-4 fw-bold mb-4 text-center">Welcome to Our Product</h1>
      <p className="lead text-center">
        We’re always on the lookout for talented, passionate.
       
        <br />
        Whether you're a developer or a creative thinker there’s a place for you here.
      </p>
    </div>
  </section>

  {/* Features Section */}
  <section id="features" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="container text-center">
      <h2 className="mb-5 display-5 fw-bold">Our Features</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="feature-icon mb-3">
            <i className="bi bi-speedometer2 fs-1"></i>
          </div>
          <h4>Fast</h4>
          <p className="lead">Time matters — and so does your career. Our streamlined application process ensures you can apply within minutes without jumping through hoops.</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-icon mb-3">
            <i className="bi bi-shield-lock fs-1"></i>
          </div>
          <h4>Secure</h4>
          <p className="lead">We use end-to-end encryption and secure data handling practices to protect your personal information at every stage.</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-icon mb-3">
            <i className="bi bi-heart fs-1"></i>
          </div>
          <h4>Reliable</h4>
          <p className="lead">Our hiring process is transparent, consistent, and designed to provide a reliable experience to every applicant.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  {/* <section id="contact" className="py-5" style={{ backgroundColor: "#ffffff" }}>
    <div className="container text-center">
      <h2 className="mb-3">Contact Us</h2>
      <p className="lead mb-4">Have any questions? We’d love to hear from you.</p>
      {!userData && (
        <Link to="/login" className="btn btn-primary btn-lg">
          Get in Touch
        </Link>
      )}
    </div>
  </section> */}


{userData.roll=="user" && ( <div className="contact-page py-5" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", fontFamily: "'Poppins', sans-serif" }}>
  <div className="container">
    <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
    <p className="text-center mb-5 text-muted">We'd love to hear from you. Please fill out the form below.</p>

    <div className="row">
      {/* Contact Form */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow-sm border-0 p-4 rounded-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Enter subject" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4 rounded-pill">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="col-lg-6">
        <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.119167156574!2d-122.41941508468184!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e91ec0c3%3A0x808b519453b5e2d!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1615152610544!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>)}

 


</div>

    )
}

export default Landingpage
