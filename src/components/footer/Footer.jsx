import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="card text-center pt-5 border-0">
        <div className="card-body">
          <h5 className="card-title">Prooutsourcing Managers Limited</h5>
          <a href="" className="">Privacy Policy</a>
          <div>
            <BsFacebook /> <span></span>
            <BsTwitter />
          </div>
        </div>
        <div className="card-footer text-muted">
          Copyright &copy; 2023
        </div>
      </div>
  )
}

export default Footer