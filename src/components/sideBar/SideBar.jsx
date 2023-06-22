import { Link } from "react-router-dom"
import "./sideBar.css"

const SideBar = () => {
  return (
    <>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="/admin">
              <i className="fa fa-home fa-2x"></i>
              <Link to="/admin" style={{ textDecoration: "none", color: "wheat" }}>
                <span className="nav-text" >Home</span>
              </Link>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/add-job">
              <i className="fa fa-plus fa-2x"></i>
              <Link to="/add-job" style={{ textDecoration: "none", color: "wheat" }}>
                <span className="nav-text">Post Job</span>
              </Link>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/applications">
              <i className="fa fa-comments fa-2x"></i>
              <span className="nav-text">Applications</span>
            </a>
          </li>

        </ul>

        <ul className="logout">
          <li>
            <a href="/">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SideBar