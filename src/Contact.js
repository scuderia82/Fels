import React from 'react';
import { MDBCol } from "mdbreact";
import {FaMobile} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs"
function Contact(){
    return(
        <div className="contact box-padding row d-flex">
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
                      <i className="fa fa-phone mr-3" /> 021/0000000
                    </p>
                    <p>
                      <i className="fa FaMobile mr-3" />< FaMobile/> +381 069/ 234 73 45
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
                      <i className="fa fa-envelope mr-3" /> info@example.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3" /> + 01 234 567 88
                    </p>
                    <p>
                      <i className="fa FaMobile mr-3" />< FaMobile/> + 01 234 567 89
                    </p>
            </MDBCol>
        </div>
        
    );
}
export default Contact;