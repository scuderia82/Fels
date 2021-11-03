import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSearch} from "react-icons/fa";

function Header(){
    return(

  <Navbar bg="light" expand="lg">
      <Container >
            <Navbar.Brand className="h1 font-weight-bold"href="/main">Fels d.o.o.</Navbar.Brand>
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
                        <div className="form-group search-input">
                            <input className="form-control-sm subsc-input" name="email" id="email" placeholder="Search..."/>
                            <button onClick="" className="subsc-btn btn btn-sm" type="button">< FaSearch/></button>
                        </div>
                    </Nav>
            </Navbar.Collapse>
      </Container>
  </Navbar>
  

    );

}
export default Header;