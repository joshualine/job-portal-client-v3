import Job from '../job/Job'
import './jobs.css'



const Jobs = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <Job />
          <Job />
          <Job />
          <Job />
        </div>
      </div>
    </>
  )
}

export default Jobs