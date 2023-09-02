import './allApplications.css';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const AllApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const getApplicationsData = async () => {
      try {
        const response = await fetch('/api/applications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
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
        <div className="header_fixed">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
              </tr>
            </thead>

            <tbody>
              {applications.map(application => (
                <tr key={application.id}>
                  <td>{application.full_name}</td>
                  <td>{application.email}</td>
                  <td>{application.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default AllApplications;
