import './applyJob.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
// import { useHistory, useParams } from 'react-router'
import { useParams } from 'react-router'
import axios from 'axios'
import TimeAgo from 'timeago-react';
import { toast } from 'react-toastify';


const ApplyJob = () => {

  const { id } = useParams()
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [published, setPublished] = useState(true)
  const [createdAt, setCreatedAt] = useState('')

  // JobApplication details
    const [application, setApplication] = useState([])
    const [first_name, setFirst_Name] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

  useEffect(() => {

    const getSingleProductData = async () => {
        const { data } = await axios.get(`/api/jobs/${id}`)
        console.log(data)

        setTitle(data.title)
        setDescription(data.description)
        // setPublished(data.published)
        setCreatedAt(data.createdAt)

        // for JobApplication
        setApplication(data.application)



    }
    getSingleProductData()

},[id])

// to add application
const addApplication = async (e) => {

  e.preventDefault()

  let application = {
      job_id: id,
      first_name: first_name,
      phone: phone,
      email: email,
  }

  
  const postMade = await axios.post(`/api/applications/${id}`, application);
  if(postMade){
    navigate('/')
    toast.success("You successfully applied for the job")
  }
}

  return (
    <>
    

      <div className="container">
        <div className="singlePost">
          <div className="singlePostWrapper">

            <h1 className="singlePostTitle">
            {title}
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
            </h1>
            <div className="singlePostInfo">
              <span>
                Location:
                <b className="singlePostAuthor"> Lagos, Nigeria</b>
              </span>
              <span>Posted:
                <b className="singlePostAuthor">
                  <TimeAgo
                    datetime={ createdAt }
                    locale='vi'
                  />
                </b>
              </span>
            </div>
            <p className="singlePostDesc">
              {description}
            </p>
          </div>
        </div>
      </div>

{/* -------------------------------------------------- */}
      <div className="application">

        <form className="applicationForm" onSubmit={addApplication}>
          <label>Name</label>
          <input
            className="applicationInput"
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
            type="name"
            placeholder="Full Name..."
          />
          <label>Phone Number</label>
          <input
            className="applicationInput"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            placeholder="Enter your Phone no...."
          />
          <label>Email</label>
          <input
            className="applicationInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email..."
          />
          <button type="submit" className="applicationButton">Apply</button>
        </form>
        
      </div>
    </>
  )
}

export default ApplyJob