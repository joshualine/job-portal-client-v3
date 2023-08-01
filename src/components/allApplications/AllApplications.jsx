import './allApplications.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';

import { useState, useEffect } from 'react'
import axios from 'axios';


const AllApplications = () => {

  const [applications, setApplications] = useState([])

  useEffect(() => {
    const getApplicationsData = async () => {
      const { data } = await axios.get('/api/applications')
      // console.log(data)
      setApplications(data)
    }
    getApplicationsData()
  }, [])

  return (
    <>

      <h1 className="display-2 text-center">Job Applications</h1>
      <Container>

      <div className="header_fixed" >
        <table>
          <thead>
            <tr>
              {/* <th>S No.</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              {/* <th>Job Applied to</th> */}
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
                  {/* <td>{application.jobId}</td> */}
                </tr>
              })
            }

          </tbody>
        </table>
      </div>
      </Container>

    </>
  )
}

export default AllApplications