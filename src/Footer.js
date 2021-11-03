import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

const Footer = () => {
  return (
    <MDBFooter  className=" footer-color page-footer font-small lighten-5 pt-0">
      <div>
          <hr className="hr-footer"/>
          <MDBContainer>
                <MDBRow className="py-4 d-flex align-items-center">
                    <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                    </MDBCol>
                </MDBRow>
          </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
            <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/gallery" className=" text-black text-decoration-none"><strong>Galerija</strong></Link>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-f" />
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/products" className=" text-black text-decoration-none"><strong>Proizvodi</strong></Link>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-f" />
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/accommodation" className="text-black text-decoration-none"> <strong>Usluge</strong></Link>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-f" />
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/contact" className="text-black text-decoration-none"><strong>Kontakt</strong></Link>
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-f" />
                </MDBCol>
           </MDBRow>
           <div className="col-md-12">
              <div className="d-flex text-center justify-content-center">
                  <ul className="icon list-group list-group-horizontal">
                      <li className="list-group-item icons">
                          <a href="">
                              <i className="fa-lg text-black mr-md-4"><FaLinkedin /></i>
                          </a>
                      </li>
                      <li className="list-group-item icons">
                          <a href="" >
                              <i className="fa-lg text-black"><FaFacebook /></i>
                          </a>
                      </li>
                      <li className="list-group-item icons">
                          <a href="">
                              <i className="fa-lg text-black"><FaInstagram /></i>
                          </a>
                      </li>
                      <li className="list-group-item icons">
                          <a href="">
                              <i className="fa-lg text-black"><FiMail /></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
             &copy; {new Date().getFullYear()} Copyright:{" "}
             <a href="https://www.MDBootstrap.com" className="text-black text-decoration-none">Fels d.o.o. Temerin</a>
          </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;