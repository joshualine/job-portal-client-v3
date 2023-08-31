import "./job.css"
// import { Link } from "react-router-dom";
import TimeAgo from 'timeago-react';

import { LinkContainer } from 'react-router-bootstrap';

import { useState, useEffect } from 'react'
import axios from 'axios';


const Job = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const { data } = await axios.get('/api/jobs');
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs data:', error);
        // Handle the error state, display an error message, or take any other appropriate action
      }
    };

    getJobsData();
  }, []);

  const arr = jobs.map((jobs)=>{
    return (
      <p key={jobs.id}>{jobs.title}</p>
    )
  })

  return (
    <>
      {
arr
      }

    </>
  )
}

export default Job