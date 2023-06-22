import { Link } from "react-router-dom"
import './applicationForm.css'

const ApplicationForm = () => {
  return (
    <>
      <div className="application">
        <form className="applicationForm">
          <label>Name</label>
          <input
            className="applicationInput"
            type="text"
            placeholder="Enter Full Name..."
          />
          <label>Email</label>
          <input
            className="applicationInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Phone No.</label>
          <input
            className="applicationInput"
            type="text"
            placeholder="Enter your phone..."
          />
          <label>CV</label>
          <input
            className="applicationInput"
            type="file"
            placeholder="Enter your password..."
          />
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <h6 className="applicationButton">Apply</h6>
          </Link>
        </form>
        
      </div>
    </>
  )
}

export default ApplicationForm