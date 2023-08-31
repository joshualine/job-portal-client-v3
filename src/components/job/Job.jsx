import "./job.css"
// import { Link } from "react-router-dom";
import TimeAgo from 'timeago-react';

import { LinkContainer } from 'react-router-bootstrap';

import { useState, useEffect } from 'react'
import axios from 'axios';


const Job = () => {

  const [gainers, setGainers] = useState([]);
  useEffect(() => {
    fetch('https://job-portal-backend-3xwc.onrender.com/api/jobs').then(response => {
      response.json().then(gainers => {
        setGainers(gainers);
        // console.log(gainers)
      });
    });
  }, []);

  return (
    <>
      <h1>
        {gainers.map(gainer =>(
          <span className="featuredTitleDate" key={gainer.id}>  ({gainer.title})</span>
        ))}
        
      </h1>

    </>
  )
}

export default Job