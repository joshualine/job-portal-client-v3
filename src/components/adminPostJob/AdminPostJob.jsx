import './adminPostJob.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const AdminPostJob = () => {
  return (
    <>
      <form className='main1'>
        <input type="title" placeholder={"Job Title..."} />
        <input type="location" placeholder={"Location..."} />
        <ReactQuill />
        <button className='badge2' style={{marginTop: '5px'}}>Post Job</button>
      </form>
    </>
  )
}

export default AdminPostJob