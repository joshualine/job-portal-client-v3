
import "./job.css"
// import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

const Job = () => {
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
              <LinkContainer to="/apply" style={{ textDecoration: "none", backgroundColor:"#EF7F1A", color:"white" }}>
                <button className="btn">Apply</button>
              </LinkContainer>
            </div>
          </div>
          <div className="mt-5">
          <h3 className="heading">
              Product Designer -
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

export default Job