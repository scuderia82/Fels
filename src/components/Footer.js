import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <MDBFooter  className="footer-color page-footer font-small lighten-5 pt-0">
      {/* <div>
          <MDBContainer>
                <MDBRow className="py-4 d-flex align-items-center">
                    <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                    </MDBCol>
                </MDBRow>
          </MDBContainer>
      </div> */}
      <MDBContainer className="text-center col-md-6 footer-p">
            <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/gallery" className=" text-white text-decoration-none"><strong>Galerija</strong></Link>
                    </h6>
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/products" className=" text-white text-decoration-none"><strong>Proizvodi</strong></Link>
                    </h6>
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/accommodation" className="text-white text-decoration-none"> <strong>Usluge</strong></Link>
                    </h6>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/contact" className="text-white text-decoration-none"><strong>Kontakt</strong></Link>
                    </h6>
                </MDBCol>
           </MDBRow>
           <hr className="hr-f"/>
           <div className="col-md-10">
                  <ul className="list-group list-group-horizontal social">
                      <li className="list-group-item icons">
                          <a href="https://rs.linkedin.com">
                              <i className="fa-lg text-white mr-md-4"><FaLinkedin /></i>
                          </a>
                      </li>
                      <li className="list-group-item icons">
                          <a href="/#" >
                              <i className="fa-lg text-white"><FaFacebook /></i>
                          </a>
                      </li>
                      <li className="list-group-item icons">
                          <a href="/#">
                              <i className="fa-lg text-white"><FaInstagram /></i>
                          </a>
                      </li>
                      <li className="list-group-item icons">
                          <a href="/#">
                              <i className="fa-lg text-white"><FiMail /></i>
                          </a>
                      </li>
                  </ul>
          </div>
      </MDBContainer>
      <div className=" text-white col-md-12 text-center copyright ">
          <MDBContainer className="footer-copyright ">
             &copy; {new Date().getFullYear()} Copyright:{"Fels d.o.o. Temerin "}
          </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;