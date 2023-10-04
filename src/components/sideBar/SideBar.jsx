import { Link } from "react-router-dom"
import "./sideBar.css"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from "../../slices/usersApiSlice"
import { logout } from "../../slices/authSlice"

const SideBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      localStorage.clear();
      await logoutApiCall().unwrap();
      dispatch(logout());
      
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            {/* <a href="/admin">
              <i className="fa fa-user fa-2x"></i>
              <Link to="/admin" style={{ textDecoration: "none", color: "wheat" }}>
                <span className="nav-text" >John Doe</span>
              </Link>
            </a> */}
            <i className="fa fa-user fa-2x"></i>
          </li>
          {/* <li>
            <a href="/admin">
              <i className="fa fa-home fa-2x"></i>
              <Link to="/admin" style={{ textDecoration: "none", color: "wheat" }}>
                <span className="nav-text" >Home</span>
              </Link>
            </a>
          </li> */}

          {/* <li className="has-subnav">
            <a href="/jobs/post">
              <i className="fa fa-plus fa-2x"></i>
              <Link to="/jobs/post" style={{ textDecoration: "none", color: "wheat" }}>
                <span className="nav-text">Post Job</span>
              </Link>
            </a>
          </li> */}

          {/* <li className="has-subnav">
            <a href="/applications">
              <i className="fa fa-clipboard fa-2x"></i>
              <Link to="/applications" style={{ textDecoration: "none", color: "wheat" }}>
                <span className="nav-text">All Applications</span>
              </Link>
            </a>
          </li> */}

        </ul>

        <ul className="logout">
          <li>
            <a href="/" onClick={logoutHandler}>
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text" onClick={logoutHandler}>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default SideBar