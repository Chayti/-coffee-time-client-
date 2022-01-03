import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const style = {
    fontWeight: "bold",
    color: "#00b9d1"
  }
  const { user, logout } = useAuth()
  return (
    <div className="mt-0 rounded header">

      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <div className="d-flex align-items-center">
              <Nav.Link as={Link} to="/home" className="link">HOME</Nav.Link>
              <Nav.Link as={Link} to="/products" className="link">PRODUCTS</Nav.Link>
              {
                user.email ?
                  <Nav.Link as={Link} to="/dashboard" className="link">DASHBOARD</Nav.Link>
                  : <p></p>

              }
            </div>
            <div className="d-flex align-items-center">
              <img className="logo mx-2" src={logo} alt="" />
              <h1>Coffee Time</h1>
            </div>
            <div className="d-flex align-items-center">
              {
                user.email ?
                  <img width="30" style={{ borderRadius: "50%", border: "1px solid wheat", color: "white" }} src={user.photoURL} alt="user" />
                  : <p></p>
              }
              {
                user.email ?
                  <span className="link">Hello, {user.displayName}</span>
                  : <p></p>
              }
              {
                user.email
                  ? <button onClick={logout} className="btn home-banner-btn m-0 px-4 py-0"><FontAwesomeIcon icon={faSignOutAlt} size="1x" />&nbsp;Log out</button>
                  : <Nav.Link as={Link} to="/login" activeStyle={style}><button className="btn home-banner-btn m-0 px-4 py-0"><FontAwesomeIcon icon={faSignInAlt} size="1x" />&nbsp;Login</button></Nav.Link>
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;