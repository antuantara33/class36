import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap"
import "./header.css";
import logo from "../../assets/kk.png"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
        <Navbar fixed="top" expand="lg" className= " menu_main ">
      <Container>
        <Navbar.Brand href="#home">
            <img className='img1' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#home">Service</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
             <Nav.Link href="#home">Contact</Nav.Link>
             
         
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
