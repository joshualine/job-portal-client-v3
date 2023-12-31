import TimeAgo from 'timeago-react';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react';

const AdminJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const response = await fetch('https://job-portal-backend-3xwc.onrender.com/api/jobs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // Handle the error state, display an error message, or take any other appropriate action
      }
    };

    getJobsData();
  }, []);

  return (
    <>
      {jobs.map((job) => (
        <div className="col-md-4" key={job.id}>
          <div className="card p-3 mb-2 jobCard1">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">{job.location}</h6>
                  <span>
                    <TimeAgo datetime={job.createdAt} locale="vi" />
                  </span>
                </div>
              </div>
              <div className="">
                <LinkContainer
                  to={`jobs/${job.id}`}
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#EF7F1A',
                    color: 'white',
                  }}
                >
                  <button className="btn">View</button>
                </LinkContainer>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                {job.title}
                <br />
                <span className="jobComName"></span>
              </h3>
              <div className="mt-5">
                <div className="mt-3">
                  <span className="jobText2 ellipse">{job.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminJob;