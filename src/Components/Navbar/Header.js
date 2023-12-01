import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Navbar,Nav } from 'react-bootstrap'
import './Header.css'


function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          APP LOGO
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          DASHBOARD
        </Link>
        <Link to="/create-ads" className="navbar-link">
          CREATE ADS
        </Link>
      </div>
    </nav>
   /* <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><h2>APP LOGO</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to='/'>DASHBOARD</Link>
          <Link to='/createads'>CREATE ADS</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>*/
  )
}

export default Header