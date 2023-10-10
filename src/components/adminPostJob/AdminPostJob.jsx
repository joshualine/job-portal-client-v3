import './adminPostJob.css'
import 'react-quill/dist/quill.snow.css'

import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { toast } from 'react-toastify';
import Editor from '../Editor';

const AdminPostJob = () => {

  const navigate = useNavigate();

  // Post Job
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')



  // to add job
  const addJob = async (e) => {
    e.preventDefault()
    let job = {
      title: title,
      description: description,
      location: location,
    }

    try {
      const response = await fetch('https://job-portal-backend-3xwc.onrender.com/api/jobs', {
      method: 'POST',
      body: JSON.stringify(job),
      headers: { 'Content-Type': 'application/json' }
    })

    
    if(response.ok){
      navigate('/admin');
      toast.success("You successfully posted a job");
    } else {
      alert('failed to Add New Job')
    }
    } catch (error) {
      console.error('Error adding a new job:', error);
      // Handle the error state, display an error message, or take any other appropriate action
    }
    

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
        <textarea
          className="applicationInput form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          rows="18"
          placeholder="Write Description..."
        />
        
        {/* <Editor value={description} onChange={setDescription} /> */}

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