import './adminOneJobView.css';
import { FaRemoveFormat, FaEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TimeAgo from 'timeago-react';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';

const AdminOneJobView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [location, setLocation] = useState('');
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const getSingleJobData = async () => {
      try {
        const response = await fetch(`https://job-portal-backend-3xwc.onrender.com/api/jobs/${id}/applications`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const applicationData = data.applications;
        console.log(applicationData);

        setTitle(data.title);
        setDescription(data.description);
        setCreatedAt(data.createdAt);
        setLocation(data.location);
        setApplications(data.applications);
      } catch (error) {
        console.error('Error fetching single job data:', error);
        // Handle the error state, display an error message, or take any other appropriate action
      }
    };

    getSingleJobData();
  }, [id]);

  const deleteJobData = async (id) => {
    try {
      await fetch(`https://job-portal-backend-3xwc.onrender.com/api/jobs/${id}`, {
        method: 'DELETE',
      });

      navigate('/admin');
      toast.success("Successfully Deleted");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="multiplePost">
          <div className="multiplePostWrapper">
            <h1 className="multiplePostTitle">
              {title}
              <div className="multiplePostEdit">
                <button className="btn btn-success" ><FaEdit /> Edit</button>
                <button className="btn btn-danger mx-3" onClick={() => deleteJobData(id)}><FaRemoveFormat /> delete</button>
              </div>
            </h1>
            <div className="multiplePostInfo">
              <span>
                Location:
                <b className="multiplePostAuthor">{location}</b>
              </span>
              <span>Posted:
                <b className="singlePostAuthor">
                  <TimeAgo
                    datetime={createdAt}
                    locale='vi'
                  />
                </b>
              </span>
            </div>
            <p className="multiplePostDesc">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="multiplePostTitle text-center">{title} Job Applications</h1>
        {
          <Container>
            <div className="header_fixed" >
              <table className='p-5'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Applicant Location</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    applications.map(application => (
                      <tr key={application.id}>
                        <td>{application.full_name}</td>
                        <td>{application.email}</td>
                        <td>{application.phone}</td>
                        <td>{application.location}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </Container>
        }
      </div>
    </>
  )
}

export default AdminOneJobView;
