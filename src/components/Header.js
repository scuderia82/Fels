import React,{useState} from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {FaSearch} from "react-icons/fa";
import FelsLogo from "../assets/fels.logo1.png";
import {BsDot} from "react-icons/bs";
import {useHistory} from 'react-router-dom'



function Header(){
    const history = useHistory();
    const[msg,setMsg] = useState("")
    const getData = (event) => {
        event.preventDefault();
        let username = event.target[0].value;
        let password = event.target[1].value;
        

        if(username.length === 0 || password.length === 0){
            setMsg("Please fill out both form fields!");
            return;
        }

        fetch('Data.json').then(res => res.json())
        .then(data => {
            if (data.username === username && data.password === password){
                history.push("/login");
            } else {
                setMsg("Wrong username or password!");
            }
        });
       
    }
    return(
        <Navbar  className="header-color" expand="lg">
            <Container className="container-fluid" >
                    <Navbar.Brand href="/main">
                        <div>
                        <img className="logo" src={FelsLogo} alt="fels logo" />
                        </div>
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/main">Pocetna</Nav.Link>
                                <Nav.Link href="/about">Reference</Nav.Link>
                                <NavDropdown title="Info" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/products"><BsDot/>Proizvodi</NavDropdown.Item>
                                    <NavDropdown.Item href="/contact"><BsDot/>Kontakt</NavDropdown.Item>
                                    <NavDropdown.Item href="accommodation"><BsDot/>Usluge</NavDropdown.Item>
                                    <NavDropdown.Item href="actual"><BsDot/>Aktuelno</NavDropdown.Item>
                                    <NavDropdown.Item href="/gallery"><BsDot/>Galerija</NavDropdown.Item>
                                </NavDropdown>
                                <div>
                                    <p className="search">Login</p>
                                    <form  className="search"onSubmit={getData}>
                                        <input className="login form-control-sm"type="text" name="username" placeholder="Username"/>  
                                        <br/>  
                                        <input type="text" className="login form-control-sm" name="password" placeholder="Password"/>
                                        <br/>
                                        <p>{msg}</p>
                                    <button className="login-btn btn btn-md text-white" type="submit">Submit</button>
                                    </form>
                                </div>
                               {/*  <div className="form-group search">
                                    <form>
                                        <input className="form-control-sm search-input" type="text"name="email" id="email" placeholder="Search..."/>
                                        <button className="search-btn text-white btn-sm" type="submit"><FaSearch/></button>
                                    </form>
                                </div>  */}
                            </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default Header;