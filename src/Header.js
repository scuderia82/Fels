import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSearch} from "react-icons/fa";
import FelsLogo from "../src/fels.logo1.png";

function Header(){
    return(

  <Navbar  className="header-color" expand="lg">
      <Container className="container-fluid" >
             <Navbar.Brand href="/main">
                <div className="logo">
                 <img src={FelsLogo} alt="fels logo" />
                </div>
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/main">Pocetna</Nav.Link>
                        <Nav.Link href="/about">Reference</Nav.Link>
                        <NavDropdown title="Info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">Proizvodi</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Kontakt</NavDropdown.Item>
                            <NavDropdown.Item href="accommodation">Usluge</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/gallery">Galerija</NavDropdown.Item>
                        </NavDropdown>
                       {/*  <div className="form-group search-input">
                            <input className="form-control-sm search-input" name="email" id="email" placeholder="Search..."/>
                            <button onClick="" className="search-btn  btn-sm" type="button">< FaSearch/></button>
                        </div> */}
                    </Nav>
            </Navbar.Collapse>
      </Container>
  </Navbar>
  

    );

}
export default Header;