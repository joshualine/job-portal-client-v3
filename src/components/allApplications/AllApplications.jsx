import './allApplications.css'
import { Container } from 'react-bootstrap';

import { useState, useEffect } from 'react'
import axios from 'axios';


const AllApplications = () => {

  const [applications, setApplications] = useState([])

  useEffect(() => {
    const getApplicationsData = async () => {
      try {
        const { data } = await axios.get('/api/applications');
        // console.log(data);
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications data:', error);
        // Handle the error state, display an error message, or take any other appropriate action
      }
    };

    getApplicationsData();
  }, []);

  return (
    <>

      <h1 className="display-2 text-center">Job Applications</h1>
      <Container>

      <div className="header_fixed" >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
            </tr>
          </thead>

          <tbody>
            {
              applications.map(application => {

                return <tr key={application.id}>
                  <td>{application.full_name}</td>
                  <td>{application.email}</td>
                  <td>{application.phone}</td>
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