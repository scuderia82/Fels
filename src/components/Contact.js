import React from 'react';
import { MDBCol } from "mdbreact";
import {FaMobile} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import{FaMapMarkerAlt} from "react-icons/fa";
import '../styles/Contact.css';

function Contact(){
    return(
        <div className="contact box-padding row d-flex footer-p">
            <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                <h6 className="text-uppercase font-weight-bold"><BsPersonFill/>
                    <strong> Lazar Santrac </strong>
                    <hr className="hr-contact" />
                </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                       <i className="fa fa-home mr-3" /> Temerin, Srbija 
                    </p>
                    <p>
                       <i className="fa fa-envelope mr-3" /> lazarsantrac@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3" /> +381 021/0000000
                    </p>
                    <p>
                      <i className="fa FaMobile mr-3" /><FaMobile/> +381 069 234 73 45
                    </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                 <h6 className="text-uppercase font-weight-bold"><BsPersonFill/>
                    <strong> Zivan Santrac </strong>
                    <hr className="hr-contact" />
                 </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                       <i className="fa fa-home mr-3" /> Temerin, Srbija 
                    </p>
                    <p>
                      <i className="fa fa-envelope mr-3" /> zivansantrac@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3" /> +381 021/0000000
                    </p>
                    <p>
                      <i className="fa FaMobile mr-3" /><FaMobile/> + 381 063 879 25 55
                    </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                <h6 className="text-uppercase font-weight-bold"><FaMapMarkerAlt/>
                    <strong> Fels d.o.o </strong>
                    <hr className="hr-contact" />
                </h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                       <i className="fa fa-home mr-3" /> Temerin, Kruzni Put BB
                    </p>
                    <p>
                      <i className="fa fa-envelope mr-3" /> fels.doo@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3" /> +381 021/0000
                    </p>
                    <p>
                       <i className="fa fa-clock mr-3" /> pon-pet / 07:00-15:00   
                    </p>
            </MDBCol>
        </div>
        

        
        
        
      );
}
export default Contact;