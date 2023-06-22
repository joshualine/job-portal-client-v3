
import { Link } from "react-router-dom";

const AdminJob = () => {
  return (
    <>
      <div className="col-md-4 ">
        <div className="card p-3 mb-2 jobCard1">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="ms-2 c-details">
                <h6 className="mb-0">Lagos, Nigera</h6> <span>Posted 1 days ago</span>
              </div>
            </div>
            <div className="">
              <Link to="/applications" style={{ textDecoration: "none" }}>
                <h6 className="jobBadge">View</h6>
              </Link>
            </div>
          </div>
          <div className="mt-5">
          <h3 className="heading">
              Senior Product -
              <br />
              
              <span className="jobComName">
              Dellotte plc
              </span>
            </h3>
            <div className="mt-5">
              <div className="mt-3">
                <span className="jobText2 ellipse">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nam, accusantium! ipsum dolor sit amet consectetur adipisicing elit.
                  Nam, accusantium!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminJob