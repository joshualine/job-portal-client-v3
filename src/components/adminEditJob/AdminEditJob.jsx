import 'react-quill/dist/quill.snow.css'

import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { toast } from 'react-toastify';

const AdminEditJob = () => {
  const navigate = useNavigate();

  // Edit Job
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  // Edit job function
  const editJob = async (id) => {
    // e.preventDefault()
    let job = {
      title: title,
      description: description,
      location: location,
    }

    try {
      const response = await fetch(`https://job-portal-backend-3xwc.onrender.com/api/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(job),
      headers: { 'Content-Type': 'application/json' }
    })

    
    if(response.ok){
      navigate('/admin');
      toast.success("Job successfully updated");
    } else {
      alert('failed to Update Job')
    }
    } catch (error) {
      console.error('Error adding a new job:', error);
      // Handle the error state, display an error message, or take any other appropriate action
    }
    

  }

  return (
    <div>AdminEditJob</div>
  )
}

export default AdminEditJob