// import { Link } from 'react-router-dom'
import logo from '../../assets/proLogo.png'
import  Hamburger  from '../../assets/hamburger.svg'
import { useState } from 'react'
import '../../App.css'
import './navBar.css'

const NavBar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const user = false;

  return (
    <nav className="navbar bg-light sticky-top">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="react logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="react logo" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
            {/* <Link to="/login" style={{textDecoration: 'none'}}>
              <div className="userSign">
              <p>{user && "SignOut"}</p>
              </div>
            </Link> */}
              <div className="userSign">
              <p>{user && "SignOut"}</p>
              </div>
            </li>
            <li>
              {/* <Link to="/register" style={{textDecoration: 'none'}}>
                <div className="userSign">
                  <p>{!user && "Register"}</p>
                </div>
              </Link> */}
                <div className="userSign">
                  <button className='signUpButton'>{!user && "Login"}</button>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar