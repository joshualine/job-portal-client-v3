import logo from '../assets/proLogo.png'

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {

  // const userInfo = {name: "John"};
  const userInfo = false;

  return (
    <Navbar className="bg-body-tertiary sticky-top" bg='dark' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
          <img
              src={logo}
              width="80"
              height="40"
              className="d-inline-block align-top"
              alt="Prououtsourcing"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className='ms-auto'>
            {userInfo ? (
              <>
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaSignInAlt /> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                    <FaSignOutAlt /> Sign Up
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;