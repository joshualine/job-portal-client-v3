import "./job.css"
// import { Link } from "react-router-dom";
import TimeAgo from 'timeago-react';

import { LinkContainer } from 'react-router-bootstrap';

import { useState, useEffect } from 'react'


const Job = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('https://job-portal-backend-3xwc.onrender.com/api/jobs')
      .then(response => {
        response.json()
          .then(jobs => {
            setJobs(jobs);
            // console.log(jobs)
          });
      });
  }, []);

  return (
    <>

      {jobs.map(job => (
        <div className="col-md-4 " key={job.id}>
          <div className="card p-3 mb-2 jobCard1">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">
                    {job.title}
                  </h6>
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
                  <button className="btn">Apply</button>
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
      ))}
    </>
  )
}

export default Job