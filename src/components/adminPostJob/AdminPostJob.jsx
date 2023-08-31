import './adminPostJob.css'
import 'react-quill/dist/quill.snow.css'

import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { toast } from 'react-toastify';

const AdminPostJob = () => {

  const navigate = useNavigate();

  // Post Job
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')



  // to add job
  const addJob = async (e) => {
    e.preventDefault()
    // let job = {
    //   title: title,
    //   description: description,
    //   location: location,
    // }

    const response = await fetch('https://job-portal-backend-3xwc.onrender.com/api/jobs', {
      method: 'POST',
      body: JSON.stringify({
        title, description, location
      }),
      headers: { 'Content-Type': 'application/json' }
    })

    
    if(response){
      navigate('/');
      toast.success("You successfully posted a job");
    } else {
      alert('failed to Add New Job')
    }


    // try {
    //   const postMade = await axios.post(`/api/jobs`, job);
    //   if (postMade) {
    //     navigate('/');
    //     toast.success("You successfully posted a job");
    //   }
    // } catch (error) {
    //   console.error('Error posting a job:', error);
    //   // Handle the error state, display an error message, or take any other appropriate action
    // }
  }

  return (
    <>
      <form className='main1' onSubmit={addJob}>
        <label>Description</label>
        <input
          className="applicationInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title..."
        />

        <label>Description</label>
        <input
          className="applicationInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Write Description..."
        />
        <label>Location</label>
        <input
          className="applicationInput"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Job Location..."
        />
        <button type="submit" className='badge2' style={{ marginTop: '5px' }}>Post Job</button>
      </form>
    </>
  )
}

export default AdminPostJob