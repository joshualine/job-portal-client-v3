import TimeAgo from 'timeago-react';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

import { useState, useEffect } from 'react'
import axios from 'axios';

const AdminJob = () => {

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const getJobsData = async () => {
      const { data } = await axios.get('/api/jobs')
      // console.log(data)
      setJobs(data)
    }
    getJobsData()
  }, [])

  return (
    <>
      {

        jobs.map(job => {

          return <div className="col-md-4 " key={job.id}>
            <div className="card p-3 mb-2 jobCard1">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">{job.location}</h6>
                    <span>
                      <TimeAgo
                        datetime={job.createdAt}
                        locale='vi'
                      />
                    </span>
                  </div>
                </div>
                <div className="">
                  <LinkContainer to={`jobs/${job.id}`} style={{ textDecoration: "none", backgroundColor: "#EF7F1A", color: "white" }}>
                    <button className="btn">View</button>
                  </LinkContainer>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  {job.title}
                  <br />
                  <span className="jobComName">
                  </span>
                </h3>
                <div className="mt-5">
                  <div className="mt-3">
                    <span className="jobText2 ellipse">
                      {job.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </>
  )
}

export default AdminJob