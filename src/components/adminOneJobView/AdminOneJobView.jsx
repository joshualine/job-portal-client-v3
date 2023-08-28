import './adminOneJobView.css'
import { FaRemoveFormat, FaEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
// import { useHistory, useParams } from 'react-router'
import { useParams } from 'react-router'
import axios from 'axios'
import TimeAgo from 'timeago-react';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';



const AdminOneJobView = () => {

  const { id } = useParams()
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [location, setLocation] = useState('')
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const getSingleJobData = async () => {
      const { data } = await axios.get(`/api/jobs/${id}/applications`)

      const applicationData = data.applications
      console.log(applicationData)

      setTitle(data.title)
      setDescription(data.description)
      setCreatedAt(data.createdAt)
      setLocation(data.location)
      setApplications(data.applications)
    }
    getSingleJobData()
  }, [id])

  const deleteJobData = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`)
      navigate('/admin')
      toast.success("Successfully Deleted")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container">
        <div className="multiplePost">
          <div className="multiplePostWrapper">

            <h1 className="multiplePostTitle">
              {title}

              <div className="multiplePostEdit">
                <button className="btn btn-success" ><FaEdit /> Edit</button>
                <button className="btn btn-danger mx-3" onClick={()=> deleteJobData(id)}><FaRemoveFormat /> delete</button>
              </div>
            </h1>
            <div className="multiplePostInfo">
              <span>
                Location:
                <b className="multiplePostAuthor">{location}</b>
              </span>
              <span>Posted:
                <b className="singlePostAuthor">
                  <TimeAgo
                    datetime={createdAt}
                    locale='vi'
                  />
                </b>
              </span>
            </div>
            <p className="multiplePostDesc">
              {description}

            </p>
          </div>
        </div>
      </div>

      {/* -------------------Job Application Display--------------------- */}
      <div>
        <h1 className="multiplePostTitle text-center">{title} Job Applications</h1>
        {
          <Container>
            <div className="header_fixed" >
              <table className='p-5'>
                <thead>
                  <tr>
                    {/* <th>S No.</th> */}
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Applicant Location</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    applications.map(application => {

                      return <tr key={application.id}>
                        {/* <td>1</td> */}
                        <td>{application.full_name}</td>
                        <td>{application.email}</td>
                        <td>{application.phone}</td>
                        <td>{application.location}</td>
                      </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
          </Container>
        }
      </div>
    </>
  )
}

export default AdminOneJobView