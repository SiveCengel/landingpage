import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react'

function Myheader() {
  return (
    <div className="myheader">
        <Navbar bg="" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">My Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
<div className="header-body text-white">
    <div className="container">
        <div className="row header-content text-center d-flex align-items-center justify-content-center">
            <div className="col-md-7">
                <h3>Burası Başlık</h3>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus non soluta eum quis. Quisquam dignissimos temporibus eligendi, laudantium illum optio!</p>
                  <a href="" className='mybtn'>Hakkımızda</a>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Myheader;